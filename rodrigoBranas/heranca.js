// // propriedade _proto_

// var homem = {
//     sexo: "masculino"
// };

// var joao = {
//     nome: "João",
//     idade: 20,
//     _proto_: homem
// };

// var pedro = {
//     nome: "Pedro",
//     idade: 18,
// };

// console.log(joao);
// console.log(joao.sexo);// { nome: 'João', idade: 20, _proto_: { sexo: 'masculino' } }
// console.log(pedro);// { nome: 'Pedro', idade: 18 }
// console.log(pedro.sexo); //undefined


// propriedade setPrototypeOf

var homem = {
    sexo: "masculino"
};

var joao = {
    nome: "João",
    idade: 20,
};
Object.setPrototypeOf(joao, homem)

var pedro = {
    nome: "Pedro",
    idade: 18,
};

console.log(joao);
console.log(joao.sexo);//{ nome: 'João', idade: 20 } masculino
console.log(pedro);// { nome: 'Pedro', idade: 18 }
console.log(pedro.sexo); //undefined