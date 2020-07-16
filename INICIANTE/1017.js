var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distancia = lines.shift();
var min = parseInt(distancia) * 2

console.log(`${min} minutos`);