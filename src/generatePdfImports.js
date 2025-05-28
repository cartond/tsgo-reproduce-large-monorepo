const fs = require('fs');
const path = require('path');

const NUM_PDFS = 400000;
const outFile = path.join(__dirname, 'pdfImports.ts');

let imports = [];
let arr = [];

for (let i = 1; i <= NUM_PDFS; i++) {
  imports.push(`import pdf_${i} from '../files/pdf/pdf_${i}.pdf';`);
  arr.push(`  pdf_${i},`);
}

const content = `// This file is auto-generated to import all PDF files\n// and export them as an array for use in the app.\n\n// prettier-ignore\n\n${imports.join('\n')}\n\nexport const pdfs = [\n${arr.join('\n')}\n];\n`;

fs.writeFileSync(outFile, content);
console.log('Generated', outFile); 