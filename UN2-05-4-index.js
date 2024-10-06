//Tratamento de Excessões
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

//EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
//AggregateError, InternalError


function convertToUpper(obj) {
  try {
    return `${obj.name.toUpperCase()}!!`
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(`Ocorreu um erro do tipo ${error.name} com a msg: ${error.message}`);
    }
  } finally {
    console.log('Completou o teste');
  }
}

const obj = { nome: 'Douglas' };  //erro nome  / correto: name
console.log(convertToUpper(obj));