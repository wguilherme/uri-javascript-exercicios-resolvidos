/* Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas
efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, 
informar o total a receber no final do mês, com duas casas decimais.*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var input_1 = lines.shift().split(' ');
var input_2 = lines.shift().split(' ');

var peca_1 = parseInt(input_1[0]);
var quantidade_1 = parseInt(input_1[1]);
var valor_1 = parseFloat(input_1[2]);

var peca_2 = parseInt(input_2[0]);
var quantidade_2 = parseInt(input_2[1]);
var valor_2 = parseFloat(input_2[2]);

var total = (quantidade_1 * valor_1) + (quantidade_2 * valor_2);
console.log("VALOR A PAGAR: R$ " + parseFloat(total).toFixed(2));