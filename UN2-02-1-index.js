console.log('10' + 2) //102
console.log('10' * 2) //20
console.log('10' / 2) //5 
console.log('teste' * 2) //NaN - Not a Number
console.log(7 / 0) //Infinnity
console.log(0.7 + 0.1) //0.7999999999999999
console.log(10.9999.toFixed(2))
//console.log(10.toFixed(2)) //não permitido para literal
console.log((10).toFixed(2))

console.log('-----------------');
// Considerando que uma pizza tradicional grande possui 35 cm de raio e uma 
// pizza tradicional pequena apresenta 25 cm, determine a diferença entre a 
// área das duas pizzas.

const raioG = 35;
const raioP = 25;

const areaG = Math.PI * Math.pow(raioG, 2);
const areaP = Math.PI * Math.pow(raioP, 2);

console.log(areaG, areaP);

const diferenca = (areaG - areaP) / Math.PI;
console.log('a diferença entre as áreas é de ' + diferenca.toFixed(2) 
            + 'π cm²');

console.log('-----------------');

const faculdade = 'Uniciv';

console.log(faculdade.charAt(3));
console.log(faculdade.charCodeAt(3));
console.log(faculdade.indexOf('1'));
console.log(faculdade.substring(1)); // retorna tudo a partir do índice passado
console.log(faculdade.substring(1, 3)); // retorna tudo dentro da margem dos índices passados

console.log('Faculdade'.concat(faculdade));
console.log('Faculdade' + faculdade);
console.log(`Faculdade ${faculdade}`);

console.log(faculdade.replace(/\w/g, '1'));

const nomes = 'Ana, Maria, José, Pedro, João';
console.log(nomes.split(','));

const creditCardNumber = '4004 5484 3214 8424';
let cc = creditCardNumber.split(' ');
console.log(cc[3]);