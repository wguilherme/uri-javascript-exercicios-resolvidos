const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let entrada = Number(lines.shift());

var entrada = 556;

const tempos = [3600, 60, 1,];
const hora = []

for (const t of tempos) {
  const saida = Math.trunc(entrada / t);
  if(t===3600){
    hora[0]+=saida;
  } else if(t===60){
    hora[1]+=saida;
  } else if(t===1){
    hora[2]+=saida;
  }
  entrada = entrada % t;
  console.log(entrada);
}

console.log(`${hora[0]}:${hora[1]}:${hora[2]}`);