// console.log('Olá, Mundo!')
// console.log("Olá, Mundo!")
// var a
// // console.log(a)
// a = 'Olá Mundo'
// a = 10
// let b = 'Outro valor'
// b = 15
// console.log(a)
// console.log(b)
// console.log(typeof b)

// console.log("016 Mundo de novo!") // Comentário
// console.log(b) // Comentário

var a = null
var d = ''
let b = 'Outro valor';
const valor = 'Valor único';
console.log(b);
console.log(valor);

b = {
    name: 'Virei um objeto'
  };

//valor = 1000; //  erro, pois constante nao muda
console.log(valor);

if (true) {
  let c = b;
  console.log(c);
}

console.log(b);
//console.log(c); // erro, pois c só existe dentro do bloco if

console.log(typeof b);
//console.log(typeof c); //  erro, pois c só existe dentro do bloco if