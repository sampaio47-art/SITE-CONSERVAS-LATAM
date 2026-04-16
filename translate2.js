const fs = require('fs');
let content = fs.readFileSync('js/index-Dd4WM7h6.js', 'utf8');

const translations = [
  ["Refeição Completa", "Comida Completa"],
  ["Clássica", "Clásica"],
  ["E-book de Esterilização Profissional", "E-book de Esterilización Profesional"],
  ["Probiótico", "Probiótico"],
];

let total = 0;
for (const [pt, es] of translations) {
  const count = content.split(pt).length - 1;
  if (count > 0) {
    content = content.split(pt).join(es);
    console.log(`OK (${count}x): ${pt} → ${es}`);
    total += count;
  } else {
    console.log(`NAO ENCONTRADO: ${pt}`);
  }
}

console.log(`\nTotal: ${total}`);
fs.writeFileSync('js/index-Dd4WM7h6.js', content, 'utf8');
console.log('Salvo!');
