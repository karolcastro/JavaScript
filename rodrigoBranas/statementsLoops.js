var text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis dictum massa, sit amet ullamcorper dui. Sed hendrerit in odio vitae aliquam. Pellentesque vel dolor justo. Vivamus aliquam magna sed ullamcorper laoreet. Aliquam porta libero vel justo feugiat tempor. Nam dignissim, velit a euismod viverra, metus leo dignissim dui, non rutrum est massa at nisl. Vestibulum commodo nibh mi, ut ullamcorper turpis suscipit sed. Ut sagittis pulvinar ex, eget eleifend lorem bibendum eget. Maecenas at vehicula turpis. Maecenas turpis diam, interdum sit amet vulputate ac, aliquam id tortor. Pellentesque at nulla vel dolor commodo fermentum eget eget purus. Vivamus non ipsum ante. Aenean ultrices sapien quam, nec faucibus ante accumsan at. Morbi nec iaculis lectus.";

//___exemplo1
// var toHackerCase = function(text){
//     for (var i =0; i < text.length; i++) {
//         console.log(text.charAt(i)) // percorre cada caracter do texto
//     }
// };
// toHackerCase(text)

//___exemplo2
// var toHackerCase = function (text) {
//     var hackerTextArray = [];
//   for (var i = 0; i < text.length; i++) {

//     if (text.charAt(i) === "o") {
//       // se no texto tiver a letra o, ele substitui por 0
//       hackerTextArray.push(0);
//     } else {
//       hackerTextArray.push(text.charAt(i));
//     }
//   }
//   return hackerTextArray.join(" , "); //separa as letras por virgula
// };
// console.log(toHackerCase(text));

//__ exemplo 3 if e else

// var toHackerCase = function (text) {
//   var hackerTextArray = [];
//   for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "o") {
//       // se no texto tiver a letra o, ele substitui por 0
//       hackerTextArray.push(0);
//     } else if (text.charAt(i) === "l") {
//       hackerTextArray.push(1);
//     } else if (text.charAt(i) === "e") {
//       hackerTextArray.push(3);
//     } else {
//       hackerTextArray.push(text.charAt(i));
//     }
//   }
//   return hackerTextArray.join(""); //separa
// };
// console.log(toHackerCase(text));



// //__ exemplo 4 somente if

// var toHackerCase = function (text) {
//   var hackerTextArray = [];
//   for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "o") {// se no texto tiver a letra o, ele substitui por 0
//       hackerTextArray.push(0);
//       continue;
//     }
//     if (text.charAt(i) === "l") {
//       hackerTextArray.push(1);
//       continue;
//     }
//     if (text.charAt(i) === "e") {
//       hackerTextArray.push(3);
//       continue;
//     }
//       hackerTextArray.push(text.charAt(i));
//   }
//   return hackerTextArray.join(""); //separa
// };
// console.log(toHackerCase(text));



// //__ exemplo 5 Switch

// var toHackerCase = function (text) {
//     var hackerTextArray = [];
//     for (var i = 0; i < text.length; i++) {
//       switch (text.charAt(i)) {
//           case 'o':
//               hackerTextArray.push(0);
//               break;
//               case 'e':
//                 hackerTextArray.push(1);
//                 break;
//                   case 'a':
//                     hackerTextArray.push(2);
//                     break;
//                       case 's':
//                         hackerTextArray.push(3);
//                         break;
//                         default:
//                             hackerTextArray.push(text.charAt(i));
//       }
       
//     }
//     return hackerTextArray.join(""); //separa
//   };
//   console.log(toHackerCase(text));


// //__ exemplo 6 while

// var toHackerCase = function (text) {
//     var hackerTextArray = [];
//     var i = 0;
//      while (i < text.length) {
//       switch (text.charAt(i)) {
//           case 'o':
//               hackerTextArray.push(0);
//               break;
//               case 'e':
//                 hackerTextArray.push(1);
//                 break;
//                   case 'a':
//                     hackerTextArray.push(2);
//                     break;
//                       case 's':
//                         hackerTextArray.push(3);
//                         break;
//                         default:
//                             hackerTextArray.push(text.charAt(i));
//       }
//        i++;
//     }
//     return hackerTextArray.join(""); //separa
//   };
//   console.log(toHackerCase(text));

//__ exemplo 7 throw, try e cat

var toHackerCase = function (text) {
    if (!text) throw "Invalid text."
    var hackerTextArray = [];
    var i = 0;
     while (i < text.length) {
      switch (text.charAt(i)) {
          case 'o':
              hackerTextArray.push(0);
              break;
              case 'e':
                hackerTextArray.push(1);
                break;
                  case 'a':
                    hackerTextArray.push(2);
                    break;
                      case 's':
                        hackerTextArray.push(3);
                        break;
                        default:
                            hackerTextArray.push(text.charAt(i));
      }
       i++;
    }
    return hackerTextArray.join(""); //separa
  };
  try {
      console.log(toHackerCase())// validacao do erro com tray e catch
  } catch(e) {
      console.log("Error: " + e)
  }
  console.log(toHackerCase(text));