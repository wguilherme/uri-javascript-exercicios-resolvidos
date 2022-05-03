const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

values = parseFloat(lines).toFixed(2);

var bills = [100, 50, 20, 10, 5, 2];
var coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

let rest = input

bills.map(bill => {
  if (rest >= bill) {
    let qtd = Math.floor(rest / bill);
    rest = rest % bill;
    console.log(`${qtd} nota(s) de R$ ${bill.toFixed(2)}`);
  }
  if (rest >= coins) {
    let qtd = Math.floor(rest / coins);
    rest = rest % coins;
    console.log(`${qtd} nota(s) de R$ ${coins.toFixed(2)}`);
  }


})