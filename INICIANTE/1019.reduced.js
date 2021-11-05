const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n')

var entrada = Number(lines.shift())
var tempos = [3600, 60, 1]
var hora = []

for (var t of tempos) {
   var saida = Math.trunc(entrada / t)
   hora.push(saida)
   entrada %= t
}
console.log(`${hora[0]}:${hora[1]}:${hora[2]}`)