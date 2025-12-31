const fs = require('fs');
const p = 'src/data/gkLearnData.ts';
let s = fs.readFileSync(p,'utf8');
let count = 0;
let idx = 0;
while (true) {
  const start = s.indexOf('content: "', idx);
  if (start === -1) break;
  const openQuote = s.indexOf('"', start);
  if (openQuote === -1) break;
  // find the closing sequence of the content string: look for '\",\n' after the openQuote
  const closeSeq = '\",\n';
  let close = s.indexOf(closeSeq, openQuote + 1);
  if (close === -1) {
    // try with CRLF
    const closeSeqCRLF = '\",\r\n';
    close = s.indexOf(closeSeqCRLF, openQuote + 1);
    if (close === -1) break;
    // adjust to use CRLF length
    // we'll treat uniformly
  }

  // Replace opening " with backtick and closing " with backtick
  s = s.slice(0, openQuote) + '`' + s.slice(openQuote + 1, close) + '`' + s.slice(close + closeSeq.length - 1);
  idx = close + 1; // continue after this position
  count++;
}
fs.writeFileSync(p, s, 'utf8');
console.log('Converted', count, 'content strings to template literals');
