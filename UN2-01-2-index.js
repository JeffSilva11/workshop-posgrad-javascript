let nome = 'Douglas';
let idade = 40;
let cidade = 'Maringá';
let uf = 'PR';

// Interpolação/Concatenação tradicional
console.log('Olá, meu nome é ' + nome + ' tenho ' + idade + ' anos de idade e moro em ' + cidade + '-' + uf);

// Template Strings
console.log(`Olá, meu nome é ${nome} tenho ${idade} anos de idade e moro em ${cidade}-${uf}`);
console.log('-----------------');

const notal = 1.2;
const nota2 = Number('2.0');

console.log(notal, nota2);
console.log(Number.isInteger(notal));
console.log(Number.isInteger(nota2));
console.log(typeof notal, typeof nota2);
console.log('-----------------');

const peso1 = 1.2;
const peso2 = Number('2.0');
const avaliacao1 = 8.876;
const avaliacao2 = 7.354;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
// console.log(total);
const media = total / (peso1 + peso2);
console.log(media);
console.log(media.toFixed(2));
console.log(typeof media, media);
console.log(Math.ceil(media));