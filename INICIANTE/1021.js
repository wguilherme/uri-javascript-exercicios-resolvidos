const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

var entrada = lines.shift();
entrada = parseFloat(entrada).toFixed(2);

var notas = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];

var head = {
   notas: {
      titulo: "NOTAS:",
      apareceu: false
   },
   moedas: {
      titulo: "MOEDAS:",
      apareceu: false
   }
}



for (var nota of notas) {

 
 
  var saida = Math.trunc(entrada / nota);

  if (nota >= 2){
   if (head.notas.apareceu === false){
      console.log(head.notas.titulo)
      head.notas.apareceu = true;
      }
     console.log(`${saida} nota(s) de R$ ${nota.toFixed(2)}`);
  }

  else if (nota < 2) {
   if (head.moedas.apareceu === false){
      console.log(head.moedas.titulo)
      head.moedas.apareceu = true;
   }
   console.log(`${saida} moeda(s) de R$ ${nota.toFixed(2)}`);
  }
  
  entrada = entrada % nota;
  if (nota < 2) {tipo = "moeda"}
}