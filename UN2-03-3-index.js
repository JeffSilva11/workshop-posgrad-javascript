
const numbers = [1, 2, 3, 4, 5, 6]

let results = numbers.map(function(e) {
    return e * 2
})
console.log(results)

const sum10 = el => el + 2
const triple = el => el * 3
const convertToBRL = el => `R$ ${parseFloat(el).toFixed(2).replace('.', ',')}`

results = numbers.map(sum10).map(triple).map(convertToBRL)
console.log(results)

console.log('-----------------');


// JSON
const cart = [
    '{ "name": "Arroz", "price": 35.99 }',
    '{ "name": "Feijão", "price": 9.87 }',
    '{ "name": "Batata", "price": 6.74 }',
    '{ "name": "Macarrão", "price": 14.35 }',
    '{ "name": "Sal", "price": 6.37 }',
    '{ "name": "Ovos", "price": 11.21 }'
  ]

const jsonParse = json => JSON.parse(json)
const price = product => product.price

const result = cart.map(jsonParse).map(price)
console.log(result)
// console.log(result, cart)

Array.prototype.meuMap = function(callback) {
    const newArray = []

    for(let i = 0; i < this.length; i++) {
        newArray.push(
            callback(this[i], i, this))
    }
    return newArray
}

const result2 = cart.meuMap(jsonParse).meuMap(price)
console.log(result2)