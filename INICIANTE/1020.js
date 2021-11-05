const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n')

var dias = Number(lines.shift())
var tempos = [365, 30, 1]

let resposta = "";

for (var t of tempos) {

   var saida = Math.trunc(dias / t)

   if (t>=365){ resposta = "ano(s)" } 
   else if (t >=30){ resposta = "mes(es)" }
   else { resposta = "dia(s)" }
   
   console.log(`${saida} ${resposta}`)
   
   // atualiza com o que sobrou da operação
   dias %= t;

}
