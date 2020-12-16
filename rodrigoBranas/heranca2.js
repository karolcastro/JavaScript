// // criando objetos com a funcao fabrica

// var criarHomem = function (nome, idade) {
//   return {
//     nome: nome,
//     idade: idade,
//     sexo: "masculino",
//   };
// };

// var joao = criarHomem("João", 20);
// var pedro = criarHomem("Pedro", 20);


// operador new cria objeto por meio de uma funcao construtora

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = "masculino";
  };
  
  var joao = new Homem("João", 20); // funcao construtora
  console.log(joao)
  var pedro = {};// criar objeto e passar o contexto para dentro do objeto com call
  Homem.call(pedro, "Pedro", 18);
//   Homem.apply(pedro, ["Pedro", 18]);// cria o objeto usando o apply
  console.log(pedro)