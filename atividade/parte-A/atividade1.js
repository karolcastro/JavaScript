//Elaborar um programa que mostre os resultados da tabuada, de 0 até 10, de um número qualquer.
//Restrição: Utilize o laço condicional pré-teste.


const prompt = require('prompt-sync')();
 
const altura = prompt('Digite a Altura ');
// console.log(`Olá ${altura} !`);

const largura = prompt('Digite a Largura ');
// console.log(`Olá ${largura} !`);

const comprimento = prompt('Digite a Comprimento ');

var volume = (comprimento * largura) * altura;

prompt(`O volume da caixa é ${volume}m3` );