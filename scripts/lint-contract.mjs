import fs from 'node:fs'; import path from 'node:path';
const root=path.resolve('src'); const files=[];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(/\.(ts|tsx)$/.test(e.name))files.push(p);}}
walk(root);const violations=[];
for(const file of files){const text=fs.readFileSync(file,'utf8');if(/from ['"]openai['"]|require\(['"]openai['"]\)/.test(text)&&!file.includes('/ai/providers.'))violations.push(`${file}: direct OpenAI SDK import in non-adapter layer`);if(/sk-[A-Za-z0-9_-]{20,}/.test(text))violations.push(`${file}: possible hardcoded API key`);if(/dangerouslyAllowBrowser/.test(text))violations.push(`${file}: browser-side provider secret bypass`);}
if(violations.length){console.error(violations.join('\n'));process.exit(1)}console.log(`LINT_CONTRACT_PASS files=${files.length}`);