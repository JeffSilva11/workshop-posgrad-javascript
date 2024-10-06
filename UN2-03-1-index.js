const valores = [5, 7.8, 6, 9, 10]

console.log(valores)
console.log(valores.length)
console.log(valores[9]) //undefined - não tem posição 9
valores[2] = 8
console.log(valores)
valores[9] = 30
console.log(valores)
console.log(valores.length)

//Adiciona um elemento no final do array
valores.push(35)
console.log(valores)

//Remove o último elemento
valores.pop()
console.log(valores)

//deletar um elemento numa posição pre definida
delete valores[4]
console.log(valores)

//Remove o primeiro elemento do array
valores.shift()
console.log(valores)

//Adiciona um valor ao primeiro elemento do array
valores.unshift(19)
console.log(valores)

//Adiciona a partir do indice "i" sem remover/removendo os valores que serão passados na sequencia
valores.splice(4, 0, 'joao', 'maria', 'jose')
console.log(valores)

valores.splice(4, 1, 'pedro')
console.log(valores)

//Monta um novo array baseado no indice
let novo = valores.slice(4)
console.log(novo)

//Pode ter parametro de limitação (ignora o ultimo indice aka < )
let novo2 = valores.slice(4, 7)
console.log(novo2)

console.log('-----------------');
