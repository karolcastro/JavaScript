// sao objetos especiais que oferecem meios para acessar e manipular suas propriedades por meio de indices

// inserindo elementos no array
// var carros = [];
// carros[0] = 'Ka';
// carros[1] = 'Corsa';
// carros[2] = 'Palio';

// console.log(carros)

// //definir o array e ja passar os elementos 
// var carros = ['Ka', 'Corsa', 'Palio'];

// console.log(carros)

// // criando o array com o NEW ( funcao construtora)

// var carros = new Array ();
// var carros = new Array ('Ka', 'Corsa', 'Palio');
// var carros = new Array (10);// tamanho inicial de elementos, pois nao temos array de tamanho fixo 

// var carros = ['Ka', 'Corsa', 'Palio'];
// carros.valueOf(); // consultar o array
// console.log(carros.valueOf());

// carros.toString();// converter o array para imprimir na tela os dados
// console.log(carros.toString());

// carros.length
// console.log(carros.length);// informa a quantidade de dados na array

// //__________________________________

// // inserir e remover

// carros.push('Gol')// insere
// console.log(carros)

// carros.pop('Gol')// Remove do final
// console.log(carros)

// carros.unshift('Gol')//insere no inicio
// console.log(carros)

// carros.shift('Gol')// retira do inicio
// console.log(carros)

// carros.indexOf('Corsa')// localiza aposicao do elemento no array
// console.log(carros.indexOf('Corsa'))

// //carros.splice(1, 1);// priemiro parametro é a posicao, segundo é o numero de elementos a ser removido(vou remover o corsa)
// console.log(carros.splice(1, 1)) //remove
// console.log(carros)

// carros.splice(1, 1, 'Sonic')//remove e adiciona
// console.log(carros)
// carros.splice(1, 0, 'Corsa')//adiciona sem remover
// console.log(carros)

// carros.forEach(function(elemento){//logica para iteracao de elementos sem usar a iteracao comum com o for( var i=0, i<carros.length, i++)

// });

// filtros

// var carros = [];

// carros[0] = {marca: 'Ford', modelo: 'Ka'};
// carros[1] = {marca: 'Chevrolet', modelo: 'Corsa'};
// carros[2] = {marca: 'Fiat', modelo: 'Palio'};

// carros.filter(function(elemento){
//     return elemento.marca === 'Ford' //retorna somente carros da marca Ford
// });

// var carros = [];

// carros[0] = {marca: 'Ford', modelo: 'Ka'};
// carros[1] = {marca: 'Chevrolet', modelo: 'Corsa'};
// carros[2] = {marca: 'Fiat', modelo: 'Palio'};

// carros.every(function(elemento){ // testa se todos os elementos sao da marca Ford
//     return elemento.marca === 'Ford' 
// });

// var carros = [];

// carros[0] = {marca: 'Ford', modelo: 'Ka'};
// carros[1] = {marca: 'Chevrolet', modelo: 'Corsa'};
// carros[2] = {marca: 'Fiat', modelo: 'Palio'};

// carros.some(function(elemento){ // testa se há algum elemento da marca Ford
//     return elemento.marca === 'Ford' 
// });

// var carros = [];

// carros[0] = {marca: 'Ford', modelo: 'Ka'};
// carros[1] = {marca: 'Chevrolet', modelo: 'Corsa'};
// carros[2] = {marca: 'Fiat', modelo: 'Palio'};

// carros.map(function(elemento){ // informa as marcas que possui no array, mapear o novo array
//     return elemento.marca === 'Ford' 
// });

// var carros = [];

// carros[0] = {marca: 'Ford', modelo: 'Ka', preco: 28800};
// carros[1] = {marca: 'Chevrolet', modelo: 'Corsa', preco: 34750};
// carros[2] = {marca: 'Fiat', modelo: 'Palio', preco: 32000};

// carros.reduce(function(prev, cur){ // prev (anterior), cur (corrente) parametros// reduce soma o preco total que deseja saber 
//     return prev + cur.preco
// }, 0);//inicio é zero da array
// //total 95550

//concat
// var carros = ['Ka', 'Corsa', 'Palio'];
// var motos = ['Honda', 'Yamaha'];

// var veiculos = carros.concat(motos);
// veiculos.toString();

// console.log(veiculos.toString())
// console.log(veiculos.length)

//slice
// var carros = [];

// carros[0] = 'Ka';
// carros[1] = 'Corsa';
// carros[2] = 'Palio';
// carros[3] = 'Gol';

// carros.slice(0,2);// de 0 a 2
// console.log(carros.slice(1,3))// de 0 a 3
// console.log(carros.slice(2))// indice - 1

// reverse (inverte a ordem)
// var carros = [];

// carros[0] = 'Ka';
// carros[1] = 'Corsa';
// carros[2] = 'Palio';
// carros[3] = 'Gol';

// //carros.reverse();// de 0 a 2
// console.log(carros.reverse())

//sort 
//ex1
// var carros = [];

// carros[0] = 'Ka';
// carros[1] = 'Corsa';
// carros[2] = 'Palio';
// carros[3] = 'Gol';

// carros.sort();//(ordena por ordem alfabetica)
// console.log(carros.sort())


//ex2
// var carros = [];

// carros[0] = {marca: 'Ford', modelo: 'Ka', preco: 28800};
// carros[1] = {marca: 'Chevrolet', modelo: 'Corsa', preco: 34750};
// carros[2] = {marca: 'Fiat', modelo: 'Palio', preco: 32000};

// carros.sort(function(a, b){
//     return a.preco - b.preco // ordena por preco do menor para o maior
//     //return b.preco - a.preco // // ordena por preco do maior para o menor
// });

// console.log(carros.sort())


//join (junta elementos e separa com base em um elemento que eu defino)

var carros = [];

carros[0] = 'Ka';
carros[1] = 'Corsa';
carros[2] = 'Palio';
carros[3] = 'Gol';

carros.join(';')
console.log(carros.join('; '))