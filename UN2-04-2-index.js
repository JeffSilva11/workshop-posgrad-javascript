// JSON
const cart = [
  { name: "Arroz", price: 35.99, estoque: false },
  { name: "Feijão", price: 9.87, estoque: true },
  { name: "Batata", price: 6.74, estoque: false },
  { name: "Macarrão", price: 14.35, estoque: true },
  { name: "Sal", price: 6.37, estoque: true },
  { name: "Ovos", price: 11.21, estoque: false }
];

// const tax = 5.47;
// const lista = cart.map(p => p.price).reduce(function(inicial, atual) {
//   // console.log(inicial, atual)
//   return inicial + atual;
// }, tax);
// console.log(lista);

// Todos os produtos da cesta possuem estoque?
const temEstoque = (resultado, estoque) => resultado && estoque
//console.log(cart.map(p => p.estoque).reduce(temEstoque))

// Existem produtos indisponíveis na cesta (sem estoque)?
const semEstoque = (resultado, estoque) => resultado || estoque
//console.log(cart.map(p => p.estoque).reduce(semEstoque))

Array.prototype.meuReduce = function(callback) {
  let acumulador = this[0]

  for(let i = 0; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this)
  }

  return acumulador
};

//const soma = (total, valor) => valor + total
//const numeros = [1, 2, 3, 4, 5]

//console.log(numeros.meuReduce(soma))

console.log('-----------------');

Array.prototype.meuReduce = function(callback, initValue) {
  const index = initValue ? 0 : 1;
  let acumulador = initValue || this[0];

  for(let i = index; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }

  return acumulador;
};

const soma = (total, valor) => valor + total;
const numeros = [1, 2, 3, 4, 5];

console.log(numeros.meuReduce(soma, 5));


