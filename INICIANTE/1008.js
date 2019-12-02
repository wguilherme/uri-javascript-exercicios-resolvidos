var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift());
var ht = parseInt(lines.shift());
var vh = parseFloat(lines.shift()).toFixed(2);
var salary = parseFloat(ht * vh).toFixed(2);


console.log("NUMBER = " + number);
console.log("SALARY = U$ " + salary);