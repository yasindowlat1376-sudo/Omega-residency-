import fs from 'node:fs';

const file = process.argv[2] ?? 'npm-audit.json';
if (!fs.existsSync(file)) {
  console.error(`Audit report not found: ${file}`);
  process.exitCode = 1;
} else {
  const report = JSON.parse(fs.readFileSync(file, 'utf8'));
  const counts = report.metadata?.vulnerabilities ?? {};
  console.log('NPM AUDIT SUMMARY');
  console.log(JSON.stringify(counts));
  const items = Object.entries(report.vulnerabilities ?? {});
  if (items.length === 0) console.log('No vulnerable packages reported.');
  for (const [name, item] of items) {
    const via = (item.via ?? []).map(x => typeof x === 'string' ? x : `${x.title ?? x.name ?? 'advisory'} (${x.url ?? 'no URL'})`).join('; ');
    console.log([
      name,
      `severity=${item.severity}`,
      `direct=${item.isDirect}`,
      `range=${item.range}`,
      `fixAvailable=${JSON.stringify(item.fixAvailable)}`,
      `nodes=${(item.nodes ?? []).join(',')}`,
      `via=${via}`
    ].join(' | '));
  }
}
