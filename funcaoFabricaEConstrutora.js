//funcao fabrica (criacao de novos objetos)

//var criarPessoa = function(nome, idade){
    //return{
    ////nome: nome,
    //idade: idade
     //}
//}

//console.log(criarPessoa('Pedro', 20))
//console.log(criarPessoa('Maria', 30))

//funcao construtora comeca com letra maiuscula e utiliza o NEW

// var Pessoa = function(nome, idade){
// this.nome = nome
// this.idade = idade
// }
// console.log(new Pessoa('Pedro', 25))// o new passa para o objeto os parametros e faz a atribuicao do this 
// console.log(new Pessoa('Maria', 35))

// var pedro = {}
// Pessoa.call(pedro, 'Joao', 34)
// console.log(pedro)


// declarando no escopo global

var counter = 0;
var counter = function () {
    return ++counter;
};

console.log(counter());
console.log(counter());
console.log(counter());

var itens = [];
var counter = function (item) {
    itens.push(item);
    return itens
};
console.log(counter('A'));
console.log(counter('B'));
console.log(counter('C'));