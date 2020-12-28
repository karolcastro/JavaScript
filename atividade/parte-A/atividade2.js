
const prompt = require('prompt-sync')();

const cotacao = prompt("Digite a cotação do dolár (U$) de hoje em reais (R$)");

const valor = prompt("Digite o valor em reais (R$) para conversão ");

var cotacaoDolar = cotacao * valor;

if (valor < cotacao) {
    prompt(`O valor total em Reais é de: R$ ${cotacaoDolar}`)
} else {
    prompt(" Cotação do Dolár U$ maior que o valor para conversão")
}