//Desestruturação de dados com ARRAY
const arr = [10, 28, 38, 40];

const [a, b, , d] = arr;
console.log(a, b, d);

console.log('-----------------');

const arr2 = [
    [10, 28, 30, 40],
    ['a', 'b', 'c', 'e']
  ];
  
  const [, [, , x]] = arr2;
  console.log(x);

console.log('-----------------');

function intervalo({ min = 0, max = 100 }) {
    const res = Math.random() * (max - min) + min;
    return Math.floor(res);
  }
  
  console.log(intervalo({ min: 17, max: 20 }));
  
  const valores = { max: 50, min: 30 };
  console.log(intervalo(valores));
  
  console.log(intervalo({ min: 98 }));

console.log('-----------------');

function intervalo2([min = 0, max = 100]) {
    if (min > max) [min, max] = [max, min];
  
    const res = Math.random() * (max - min) + min;
    return Math.floor(res);
  }
  
  console.log(
    intervalo2([20, 30]),
    intervalo2([30, 10]),
    intervalo2([90]),
    intervalo2([, 5]),
    intervalo2([]),
    //intervalo2(), //erro - nao pode ser vazio
  );