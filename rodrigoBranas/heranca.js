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


// // propriedade setPrototypeOf

// var homem = {
//     sexo: "masculino"
// };

// var joao = {
//     nome: "João",
//     idade: 20,
// };
// Object.setPrototypeOf(joao, homem)

// var pedro = {
//     nome: "Pedro",
//     idade: 18,
// };

// console.log(joao);
// console.log(joao.sexo);//{ nome: 'João', idade: 20 } masculino
// console.log(pedro);// { nome: 'Pedro', idade: 18 }
// console.log(pedro.sexo); //undefined



// // propriedade Object.create

// var homem = {
//     sexo: "masculino"
// };

// var pedro = Object.create(homem)
// pedro.nome = "Pedro";
// pedro.idade = 18

// console.log(pedro);// { nome: 'Pedro', idade: 18 }
// console.log(pedro.sexo); //undefined


// // propriedade delete e Object.keys

// var homem = {
//     sexo: "masculino"
// };

// var pedro = {
//     nome: "Pedro",
//     idade: 20,
//     sexo: "feminino"
// };
// delete pedro.sexo;
// Object.setPrototypeOf(pedro, homem)

// console.log(pedro);// { nome: 'Pedro', idade: 18 }
// console.log(pedro.sexo); //{ nome: 'Pedro', idade: 20 } masculino
// console.log(Object.keys(pedro)) // [ 'nome', 'idade' ]


// propriedade for in

var homem = {
    sexo: "masculino"
};

var pedro = {
    nome: "Pedro",
    idade: 20,
    sexo: "feminino"
};
delete pedro.sexo;
Object.setPrototypeOf(pedro, homem)

// console.log(pedro);// { nome: 'Pedro', idade: 18 }
// console.log(pedro.sexo); //{ nome: 'Pedro', idade: 20 } masculino

for (var property in pedro){
    //if (!pedro.hasOwnProperty(property)) continue;// verifica se esta propriedade faz parte de pedro
    console.log(property)// nome idade sexo
}