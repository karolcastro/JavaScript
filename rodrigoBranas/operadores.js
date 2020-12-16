//ToNumber()

// let number = 0 ==''
// console.log(number) // true

// var nota = new Number(10);
// console.log(nota) //[Number: 10]

// console.log(nota.valueOf())// 10

// var igual = 10 == nota;
// console.log(igual)// true


// ///___exemplo 2 valueOf

// var x = {};
// console.log(x);

// var igual = 10 == x;
// console.log(igual); // false

// x.valueOf = function(){
//     return 10
// };
// console.log(x) //{ valueOf: [Function] }

// var igual = 10 == x;
// console.log(igual);// true

// ///___exemplo 3 toString

// x.toString = function(){
//     return 100;
// }
// console.log(x)

// var igual = 10 == nota;
// console.log(igual)// true

// comparacao de dois objetos

// var x = {};
// var y = {};
// var igualObjeto = x == y;
// var igualObjeto2 = x === y
// console.log(igualObjeto) //false
// console.log(igualObjeto2) //false

// var z = x;
// console.log(z) //{}

// ___exemplo 4 

// var generateSerial = function(max){
//     if (max === undefined || max === null || max === 0){
//         max = 1000;
//     }
//     return Math.floor(Math.random() * max);
// };

// console.log(generateSerial(1000));
// console.log(generateSerial(10));
// console.log(generateSerial(100));

// var generateSerial = function(max){
//     if (!max){
//         max = 1000;
//     }
//     return Math.floor(Math.random() * max);
// };
// console.log(generateSerial(10));
// console.log(generateSerial(100));


// var generateSerial = function(max){
//     max = max || 1000;
//     return Math.floor(Math.random() * max);
// };
// console.log(generateSerial(1000));
// console.log(generateSerial(100));


//___new

// var Pessoa = function(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
// };
// var pedro = new Pessoa('Pedro', 20);
// console.log(pedro)


//___instanceof

// var Pessoa = function(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
// };
// var pedro = new Pessoa('Pedro', 20);
// console.log(pedro);// Pessoa { nome: 'Pedro', idade: 20 }
// console.log(pedro instanceof Pessoa);// true
// console.log(pedro instanceof Date);// false

// //__ in
// console.log('nome' in pedro);//true
// console.log('peso' in pedro)// false


// //delete
// delete pedro.nome;
// console.log(pedro)// Pessoa { idade: 20 }

//ternario
// var idade = 22;
var idade = function(idade){
    if((idade >= 18)? "Maior idade" : "Menor idade"){

    }
    return idade
}
console.log()