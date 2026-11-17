export type BibliographicRecord = {
  title: string;
  authors?: string[];
  journal?: string;
  year?: string | number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  pmid?: string | number;
  pmcid?: string;
  source?: string;
  publicationType?: string;
  accessedAt?: string;
};

export type CitationLink = { label: 'DOI' | 'PubMed' | 'PMC'; url: string };

function clean(value: string | number | undefined): string {
  return String(value ?? '').trim();
}

export function normalizeDoi(value: string | undefined): string | undefined {
  const raw = clean(value).replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').replace(/^doi:\s*/i, '');
  return /^10\.\d{4,9}\/[\-._;()/:A-Z0-9]+$/i.test(raw) ? raw : undefined;
}

export function normalizePmid(value: string | number | undefined): string | undefined {
  const raw = clean(value).replace(/^PMID:\s*/i, '');
  return /^\d{1,10}$/.test(raw) ? raw : undefined;
}

export function normalizePmcid(value: string | undefined): string | undefined {
  const raw = clean(value).replace(/^PMC/i, '');
  return /^\d{1,10}$/.test(raw) ? `PMC${raw}` : undefined;
}

export function citationLinks(record: BibliographicRecord): CitationLink[] {
  const links: CitationLink[] = [];
  const doi = normalizeDoi(record.doi);
  const pmid = normalizePmid(record.pmid);
  const pmcid = normalizePmcid(record.pmcid);
  if (doi) links.push({ label: 'DOI', url: `https://doi.org/${doi}` });
  if (pmid) links.push({ label: 'PubMed', url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/` });
  if (pmcid) links.push({ label: 'PMC', url: `https://pmc.ncbi.nlm.nih.gov/articles/${pmcid}/` });
  return links;
}

export function formatVancouver(record: BibliographicRecord): string {
  const authors = (record.authors ?? []).map(x => x.trim()).filter(Boolean);
  const authorText = authors.length > 6 ? `${authors.slice(0, 6).join(', ')}, et al.` : authors.join(', ');
  const title = clean(record.title);
  const journal = clean(record.journal);
  const year = clean(record.year);
  const volume = clean(record.volume);
  const issue = clean(record.issue);
  const pages = clean(record.pages);
  const journalPart = journal ? `${journal}.` : '';
  const datePart = year ? `${year}${volume ? `;${volume}` : ''}${issue ? `(${issue})` : ''}${pages ? `:${pages}` : ''}.` : '';
  const parts = [authorText, title ? `${title}.` : '', journalPart, datePart].filter(Boolean);
  const doi = normalizeDoi(record.doi);
  const pmid = normalizePmid(record.pmid);
  if (doi) parts.push(`doi: ${doi}.`);
  else if (pmid) parts.push(`PMID: ${pmid}.`);
  return parts.join(' ');
}

export function citationCompleteness(record: BibliographicRecord): 'MINIMAL' | 'PARTIAL' | 'GOOD' {
  const hasTitle = Boolean(clean(record.title));
  const hasLocator = Boolean(normalizeDoi(record.doi) || normalizePmid(record.pmid) || normalizePmcid(record.pmcid));
  const hasContext = Boolean(clean(record.journal) && clean(record.year));
  if (hasTitle && hasLocator && hasContext) return 'GOOD';
  if (hasTitle && (hasLocator || hasContext)) return 'PARTIAL';
  return 'MINIMAL';
}
