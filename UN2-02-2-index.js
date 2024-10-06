console.log('-----------------');
let isAtivo = false;
console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);
isAtivo = 0;
console.log(isAtivo);
isAtivo = 1;
console.log(isAtivo); //Imprime o valor atual da variável
console.log(!!isAtivo); //  Imprime o valor booleano equivalente
console.log(!isAtivo); // Imprime o oposto do valor booleano

//verdadeiros
console.log('---- verdadeiros ----')
console.log(!!123987123)
console.log(!!-76237)
console.log(!!'I')
console.log(!!'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 1))

//falsos
console.log('---- falsos ----')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = 0))

console.log('---- considerações ----')
let nome = 'Douglas'
console.log(nome || 'Desconhecido')
console.log(!!('' || null || 0 || 'verdadeiro' || undefined))