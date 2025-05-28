const fs = require('fs');
const path = require('path');

const NUM_ICONS = 400000;
const outFile = path.join(__dirname, 'pngImports.ts');

let imports = [];
let arr = [];

for (let i = 1; i <= NUM_ICONS; i++) {
  imports.push(`import icon_${i} from '../files/img/icon_${i}.png';`);
  arr.push(`  icon_${i},`);
}

const content = `// This file is auto-generated to import all PNG icon files\n// and export them as an array for use in the app.\n\n// prettier-ignore\n\n${imports.join('\n')}\n\nexport const icons = [\n${arr.join('\n')}\n];\n`;

fs.writeFileSync(outFile, content);
console.log('Generated', outFile); 