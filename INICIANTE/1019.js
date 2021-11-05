const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

var entrada = Number(lines.shift());
var entrada = 556;

const tempos = [3600, 60, 1,];
const hora = []

for (var t of tempos) {
  const saida = Math.trunc(entrada / t);
  console.log(saida) //debug
  if(t===3600){
    hora.push(saida);
  } else if(t===60){
    hora.push(saida);
  } else if(t===1){
    hora.push(saida);
  }
  entrada = entrada % t;
  console.log(entrada); //debug
}

console.log(`${hora[0]}:${hora[1]}:${hora[2]}`);