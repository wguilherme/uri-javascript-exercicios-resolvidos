var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = lines.shift();
var Y = lines.shift();

var MEDIA = (X / Y).toFixed(3);

console.log(MEDIA +" km/l");