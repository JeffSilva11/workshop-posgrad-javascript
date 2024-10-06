// // JSON
// const cart = [
//     '{ "name": "Arroz", "price": 35.99 }',
//     '{ "name": "Feijão", "price": 9.87 }',
//     '{ "name": "Batata", "price": 6.74 }',
//     '{ "name": "Macarrão", "price": 14.35 }',
//     '{ "name": "Sal", "price": 6.37 }',
//     '{ "name": "Ovos", "price": 11.21 }'
//   ]

// const jsonParse = json => JSON.parse(json)
// const price = product => product.price

// //const result = cart.map(jsonParse).map(price)

// const caro = product => product.price >= 9.88

// const result = cart.map(jsonParse).filter(caro)
// console.log(result)

console.log('-----------------');

// JSON
const cart = [
     { name: "Arroz", price: 35.99 },
     { name: "Feijão", price: 9.87 },
     { name: "Batata", price: 6.74 },
     { name: "Macarrão", price: 14.35 },
     { name: "Sal", price: 6.37 },
     { name: "Ovos", price: 11.21 }
   ];
//   const price = product => product.price
//   const caro = product => product.price >= 9.88
  
//   const result = cart.filter(caro)
//   console.log(result)

  console.log('-----------------');

  Array.prototype.meuFilter = function(callback) {
    const newArray = [];  
    for(let i = 0; i < this.length; i++) {
      if(callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }  
    return newArray;
  };
  const price = product => product.price
  const caro = product => product.price >= 9.88
  
  const result = cart.meuFilter(caro);
  console.log(result);