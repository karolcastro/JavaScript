//expressoes para validacao de campos (cpf, email, dados)

//regex
// var regExp = /abc/;// primeira forma de declaracao (literal)
// var regExp = new RegExp ('abc'); // segunda forma de declaracao

//exec - executa a RegExp, retornando os detalhes
//test - testa a RegExp, retornando true ou false

//exec - retorna os detalhes
// var regExp = /9999-9999/;
// var telefone = '9999-9999';
// console.log(regExp.exec(telefone))//[ '9999-9999', index: 0, input: '9999-9999', groups: undefined ]

// //test - retorna true or false
// var regExp = /9999-9999/;
// var telefone = '9999-9999';
// console.log(regExp.test(telefone))//true



// // passo 2____________________

// //desta forma sem as barras invertidas é retornadop false
// var regExp = /(48)9999-9999/;
// var telefone = '(48)9999-9999';
// console.log(regExp.test(telefone))//false

// // colocando a barra invertida para retornar a exressao como true
// var regExp = /\(48\)9999-9999/;
// var telefone = '(48)9999-9999';
// console.log(regExp.test(telefone))//true


//passo 3______^_____$_____
// o " ˆ " significa que um determinado caracter deve ser no inicio e o " $ " indica que aquele caracter deverá ser no final

//colocando ˆ no inicio (indico que tem que comecar com (48) a frase, entao desta forma dará false)
// var regExp = /^\(48\)9999-9999/;
// var telefone = 'o Telefone é (48)9999-9999, tratar com João';
// console.log(regExp.test(telefone)) //false

// // iniciando a frase agora com o (48) retorna true, pq eu indiquei que a frase comeca com (48)
// var regExp = /^\(48\)9999-9999/;
// var telefone = '(48)9999-9999, tratar com João';
// console.log(regExp.test(telefone)) //true

// // finalizando com o $ retorna false, pq eu indico que o final será no 99 e nao terá mais nada após.
// var regExp = /^\(48\)9999-9999$/;
// var telefone = '(48)9999-9999, tratar com João';
// console.log(regExp.test(telefone)) //false

// // finalizando com o $ retorna true, pq eu retirei todos os caracteres apos o 99.
// var regExp = /^\(48\)9999-9999$/;
// var telefone = '(48)9999-9999';
// console.log(regExp.test(telefone)) //true

//passo 4 _________________Grupos de Caracteres
//[abc] aceita qualquer caractere dentro do grupo, nesse caso a, b e c
//[ˆabc] não aceita qualquer caractere dentro do grupo, nesse caso a, b ou c
// [0-9] aceita qualquer caracter entre 0 e 9
// [ˆ0-9] não aceita qualquer caracter entre 0 e 9

//[0-9] alterando os valores para aceitar de 0 a 9
// var regExp = /^\([0-9][0-9]\)[0-9][0-9][0-9][0-9]-9999$/;
// var telefone = '(80)9999-9999';
// console.log(regExp.test(telefone)) //true

// var regExp = /^\([0-9][0-9]\)[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
// var telefone = '(80)9999-9999';
// console.log(regExp.test(telefone)) //true

//passo 5 __________________Grupos Quantificadores
// os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres
//{n} - quantifica um número específico
//{n,} - quantifica um número mínimo
//{n,m} - quantifica um número mínimo e um número máximo

//usando {n} - para quantificar e ficar mais enxuto
var regExp = /^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/;
var telefone = '(80)9999-9999';
console.log(regExp.test(telefone)) //true

//colocando um caracter a mais
var regExp = /^\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}$/;
var telefone1 = '(80)99877-1234';
console.log(regExp.test(telefone1)) //true
var telefone2 = '(80)9999-9999';
console.log(regExp.test(telefone2)) //true
