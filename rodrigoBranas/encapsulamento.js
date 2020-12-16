// encapsulamento por meio de objetos
// var counter = {
//     value: 0,
//     add: function () {
//         return ++this.value
//     }
// };
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());

// var itens = {
//     value: [],
//     add: function (item) {
//         this.value.push(item);
//         return this.value;
//     }
// };
// console.log(itens.add('A'));
// console.log(itens.add('B'));
// console.log(itens.add('C'));

// console.log(counter.add());

//________________________

//encapsulamento por meio de funcao fabrica (expor a parte publica)

// var counter = function () {
//   var value = 0;
//   var add = function () {
//     return ++value;
//   };
// };

// console.log(counter.value); //undefined
// console.log(counter.add()); //erro na funcao

// var createCounter = function () {
//   var value = 0;
//   return {
//     add: function () {
//       return ++value; // retorno do que eu quero que fique publico
//     },
//   };
// };
// var counter = createCounter();

// console.log(counter.value);//undefined
// console.log(counter.add()); // 1

// //________________________

// //encapsulamento por meio de funcao construtora (expor a parte publica usando o NEW)

// var Counter  = function () {
//     var value = 0;
//     this.add = function (){ //o que eu quero que fique publico eu atribuo ao this
//         return ++value
//     };
// };
// var counter = new Counter();

// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());


//________________________

//encapsulamento por meio de funcao invocada expressamente (Module Pattern)

var counter = (function (){
    var value = 0;
    return{
        add: function () {
            return ++value;
        }
    };
})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());