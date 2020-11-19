//expressoes para validacao de campos (cpf, email, dados)

//regex
// var regExp = /abc/;// primeira forma de declaracao (literal)
// var regExp = new RegExp ('abc'); // segunda forma de declaracao

//exec - executa a RegExp, retornando os detalhes
//test - testa a RegExp, retornando true ou false

//exec
var regExp = /9999-9999/;
var telefone = '9999-9999';
console.log(regExp.exec(telefone))

//test
var regExp = /9999-9999/;
var telefone = '9999-9999';
console.log(regExp.test(telefone))