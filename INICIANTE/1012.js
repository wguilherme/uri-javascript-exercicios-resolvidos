/* Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');
var A = parseFloat(valores[0]);
var B = parseFloat(valores[1]);
var C = parseFloat(valores[2]);

var pi = 3.14159;

var areaTriangulo = (A*C)/2;
var areaCirculo = pi * Math.pow(C, 2);
var areaTrapezio = ((A+B)/2) * C;
var areaQuadrado = B*B;
var areaRetangulo = A*B;

console.log("TRIANGULO: " + parseFloat(areaTriangulo).toFixed(3));
console.log("CIRCULO: " + parseFloat(areaCirculo).toFixed(3));
console.log("TRAPEZIO: " + parseFloat(areaTrapezio).toFixed(3));
console.log("QUADRADO: " + parseFloat(areaQuadrado).toFixed(3));
console.log("RETANGULO: " + parseFloat(areaRetangulo).toFixed(3));