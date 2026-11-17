import { useMemo, useState } from 'react';
import { Check, Copy, ExternalLink, FileText } from 'lucide-react';
import { citationCompleteness, citationLinks, formatVancouver, type BibliographicRecord } from '../content/citations';

const empty: BibliographicRecord = { title: '', authors: [], journal: '', year: '', volume: '', issue: '', pages: '', doi: '', pmid: '', pmcid: '' };
const fields: Array<{key:keyof BibliographicRecord;label:string;placeholder:string}> = [
  {key:'title',label:'عنوان مقاله',placeholder:'Full article title'},
  {key:'authors',label:'نویسندگان',placeholder:'Author A; Author B; Author C'},
  {key:'journal',label:'نام ژورنال',placeholder:'Journal title'},
  {key:'year',label:'سال',placeholder:'2026'},
  {key:'volume',label:'Volume',placeholder:'12'},
  {key:'issue',label:'Issue',placeholder:'3'},
  {key:'pages',label:'Pages / eLocator',placeholder:'100–108'},
  {key:'doi',label:'DOI',placeholder:'10.xxxx/xxxxx'},
  {key:'pmid',label:'PMID',placeholder:'12345678'},
  {key:'pmcid',label:'PMCID',placeholder:'PMC1234567'},
];

export default function CitationWorkbench() {
  const [record,setRecord] = useState<BibliographicRecord>(empty);
  const [copied,setCopied] = useState(false);
  const citation = useMemo(()=>formatVancouver(record),[record]);
  const links = useMemo(()=>citationLinks(record),[record]);
  const quality = citationCompleteness(record);
  const update = (key:keyof BibliographicRecord,value:string) => setRecord(prev=>({...prev,[key]:key==='authors'?value.split(';').map(x=>x.trim()).filter(Boolean):value}));
  const copy = async () => {
    if (!citation) return;
    try { await navigator.clipboard.writeText(citation); setCopied(true); window.setTimeout(()=>setCopied(false),1600); }
    catch { setCopied(false); }
  };
  return <section className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/50 p-5 shadow-sm sm:p-6" data-testid="citation-workbench">
    <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-black tracking-widest text-indigo-600">CITATION BUILDER</p><h2 className="mt-1 text-lg font-black text-slate-900">ساخت Citation به سبک Vancouver</h2><p className="mt-1 text-xs leading-6 text-slate-500">اطلاعات را از رکورد اصلی PubMed / Europe PMC / ناشر وارد کنید؛ فیلد خالی حدس زده نمی‌شود.</p></div><span className={`rounded-full px-3 py-1 text-xs font-bold ${quality==='GOOD'?'bg-emerald-100 text-emerald-800':quality==='PARTIAL'?'bg-amber-100 text-amber-800':'bg-slate-100 text-slate-600'}`}>{quality==='GOOD'?'اطلاعات کافی':quality==='PARTIAL'?'اطلاعات ناقص':'اطلاعات اولیه'}</span></div>
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {fields.map(f=><label key={String(f.key)} className="block text-xs font-bold text-slate-700">{f.label}<input value={f.key==='authors'?(record.authors??[]).join('; '):String(record[f.key]??'')} onChange={e=>update(f.key,e.target.value)} placeholder={f.placeholder} className="mt-1 min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-normal outline-none focus:border-indigo-400"/></label>)}
    </div>
    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4"><div className="flex items-center justify-between gap-2"><b className="flex items-center gap-2 text-sm text-slate-800"><FileText size={16}/> خروجی Vancouver</b><button onClick={copy} disabled={!citation} className="inline-flex min-h-9 items-center gap-2 rounded-lg bg-slate-900 px-3 text-xs font-bold text-white disabled:opacity-40">{copied?<Check size={14}/>:<Copy size={14}/>} {copied?'کپی شد':'کپی Citation'}</button></div><p className="mt-3 text-sm leading-7 text-slate-700">{citation||'با تکمیل عنوان مقاله، Citation ساخته می‌شود.'}</p>
      {!!links.length&&<div className="mt-3 flex flex-wrap gap-2">{links.map(link=><a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-1 rounded-lg bg-indigo-50 px-3 text-xs font-bold text-indigo-700">{link.label}<ExternalLink size={12}/></a>)}</div>}
    </div>
    <p className="mt-3 text-[11px] leading-5 text-slate-500">این ابزار metadata را قالب‌بندی می‌کند و صحت مقاله، peer review، نتیجه علمی یا نسخه guideline را تأیید نمی‌کند. پیش از استفاده دانشگاهی، رکورد ناشر و شناسه‌ها را تطبیق دهید.</p>
  </section>;
}
