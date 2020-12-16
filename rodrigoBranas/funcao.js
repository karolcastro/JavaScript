//undefined no JavaScript é falso
// NuL é falso 
// string vazia ' ' resolve para falso
//     console.log(NaN === NAN) vai dar falso

// function soma( a, b = 0){
//     if( b == undefined){
//         //console.log(a +(b || 2))
//         b = 10
//     }
//     console.log(a +b)
// }
// soma(3 ,4)

//ex
function somar(a = 1, b = 1) {
  console.log(a + b);
}
let x  = somar(3)
    console.log(x)

    somar()

function subtrair(a ,b){
    return a -b 
}

let y = subtrair(594, 185)
console.log(y)

//ex
function executar(fn) {
  if (typeof fn === "function") {
    console.log("Executando...");
    fn();
  }
}

executar(3);
executar(somar);
