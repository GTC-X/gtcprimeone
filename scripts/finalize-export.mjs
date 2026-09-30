// Static hosting: ensure Arabic documents declare their language before hydration.
import fs from 'node:fs';
import path from 'node:path';
function visit(dir) { for (const entry of fs.readdirSync(dir,{withFileTypes:true})) { const filename=path.join(dir,entry.name); if(entry.isDirectory())visit(filename);else if(entry.name.endsWith('.html')) { const ar=filename.startsWith(path.join('out','ar')+path.sep);const lang=ar?'ar':'en'; let html=fs.readFileSync(filename,'utf8');html=html.replace(/<html[^>]*>/,`<html lang="${lang}" dir="${ar?'rtl':'ltr'}">`);fs.writeFileSync(filename,html); } } }
visit('out');
console.log('Language and direction verified for exported documents.');
