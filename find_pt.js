const fs = require('fs');
const content = fs.readFileSync('js/index-Dd4WM7h6.js', 'utf8');

const found = new Set();
// Match double-quoted strings
const dq = /"([^"\\]{8,})"/g;
// Match single-quoted strings
const sq = /'([^'\\]{8,})'/g;

function check(s) {
  const hasPtChar = /[ãõçêâîôûàèéíóú]/.test(s);
  const hasPtWord = /\b(refeição|salgado|agridoce|defumado|clássica|rápida|caseiro|orgânico|frasco|pote|vidro|rendimento|dificuldade|iniciante|intermediário|artesanal|gourmet|tradicional|filtro|ingredientes|preparo|porção|categoria|todos)\b/i.test(s);
  const isCode = /http|aria|class|data-|font-|color:|border|margin|padding|display|position|width|height|transform|background|transition|outline|overflow|pointer|cursor|flex|grid|block|inline|none|absolute|relative|fixed|sticky|hidden|visible|rgba|#[0-9a-f]{3}|\.js|\.css|\.svg|\.png|\.jpg|\.ico|modulepreload|charset|viewport/i.test(s);

  if ((hasPtChar || hasPtWord) && !isCode) {
    found.add(s);
  }
}

let m;
while ((m = dq.exec(content)) !== null) check(m[1]);
while ((m = sq.exec(content)) !== null) check(m[1]);

found.forEach(s => console.log(JSON.stringify(s)));
console.log('\nTotal:', found.size);
