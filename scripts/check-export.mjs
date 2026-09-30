import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { content } from '../lib/content.js';
import theme from '../tailwind.config.js';
function keys(x, prefix='') {return Object.entries(x).flatMap(([k,v])=>v&&typeof v==='object'?keys(v,`${prefix}${k}.`):[`${prefix}${k}`]);}
assert.deepEqual(keys(content.en),keys(content.ar),'Locale dictionary structure must match');
assert.equal(theme.theme.extend.colors.primary.DEFAULT,'#293b93');
assert.equal(theme.theme.extend.colors.secondary.DEFAULT,'#b68756');
const routes=['','about','liquidity','connectivity','risk-management','contact','contact-us'];
let checked=0;
for(const locale of ['','ar']) for(const page of routes){
 const route=[locale,page].filter(Boolean).join('/');const filename=path.join('out',route,'index.html');assert(fs.existsSync(filename),`Missing route ${route}`);
 const html=fs.readFileSync(filename,'utf8');assert(html.includes(`lang="${locale==='ar'?'ar':'en'}"`));assert(html.includes(`dir="${locale==='ar'?'rtl':'ltr'}"`));
 for(const match of html.matchAll(/(?:href|src)="([^"?#]+)[^\"]*"/g)){const url=match[1];if(!url.startsWith('/')||url.startsWith('//'))continue;const local=path.join('out',decodeURIComponent(url));assert(fs.existsSync(local)||fs.existsSync(path.join(local,'index.html')),`Missing asset or route ${url} from ${route}`);}
 const visible=html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,'');assert(!visible.includes('>undefined<'),'Undefined visible value');checked++;
}
assert(fs.statSync('public/assets/hero-transparent.webp').size>1000,'Hero asset must be present');
console.log(`PASS: ${checked} localized routes, internal links/assets, dictionary parity and brand tokens.`);
