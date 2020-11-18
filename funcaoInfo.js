// // funcao é um bloco isolado que instrutui encapsulamento, onde sao de primwira classe. 
// //Podem  ser atribuidas a uma variavel, passada como parametro e retornada em outra funcao

// //ex1 function declaration, ela é carregada antes da interpretacao
// function soma(a,b){
//     return a + b;
// }

// console.log(soma)
// console.log(soma(2, 2))

// //ou 

// console.log(soma(2, 2))
// function soma(a,b){
//     return a + b;
// }

// //ex2 function expression, necessita desta ordem para ser carregada
// var soma = function soma(a, b){ aqui a gente consegue ver a atribuicao acontecer
//     return a + b
// }
// console.log(soma)
// console.log(soma(2, 2))

// // Invocando as funcoes

// // Escopo Global
// var soma = function soma(a, b){
//     return a + b
// }
// soma(2 , 2)// invoca ela globalmente

// //invocar passando a funcao como parametro
// var produto = {nome:"sapato, preco: 150"};
// var formulaImpostoA = function(preco){return preco*0.1}
// var formulaImpostoB = function(preco){return preco*0.2}
// var calcularPreco = function (produto, formulaImposto){
//     return produto.preco + formulaImposto(produto.preco)}

// calcularPreco(produto, formulaImpostoA);
// calcularPreco(produto, formulaImpostoB)

// // invocar retornando uma funcao dentro de outra
// var helloWorld = function(){
//     return function(){
//         return 'Heloo World'
//     };
// };
// console.log(helloWorld)
// console.log(helloWorld())
// console.log(helloWorld()())

// invocar uma funcao como método
var pessoa = {
    nome: 'João',
    idade: 20,
    getIdade: function(){
        return this.idade
    }
    
}
pessoa.getIdade();
getIdade()
getIdade.call(pessoa)

//ex invocar uma funcao com metodo call e apply
// funcao.call(escopo, parametro1, parametro2)
// funcao.apply(escopo, parametro)

var getIdade = function(){
    return this.idade
}

var pessoa = {
    nome: 'João',
    idade: 20,
    getIdade: getIdade
    }
console.log(pessoa.getIdade(2))
console.log(getIdade.call(pessoa, 2))
console.log(getIdade.apply(pessoa, [2]))

//ex invocar uma funcao com o operador new (ele consegue instanciar uma classe)


