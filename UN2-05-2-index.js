//Desestruturação de dados com OBJETO
const Pessoa = {
    nome: 'Douglas',
    idade: 40,
    endereco: {
        rua: 'Av. Brasil',
        numero: 1234,
        cidade: 'Maringá',
        uf: 'PR',
        cep: '12345-896'
    }
}

var {nome, idade} = Pessoa
console.log(nome, idade)

var { nome: n, idade: i } = Pessoa
console.log(n, i)

console.log(Pessoa.endereco.rua)

var { endereco: { rua, numero } } = Pessoa
console.log(`${rua}, ${numero}`)

var { endereco: { rua: logradouro, numero: nr } } = Pessoa
console.log(`${logradouro}, ${nr}`)

var {endereco: {rua, numero, cep}} = Pessoa
console.log(`${rua}, ${numero} - ${cep}`)

var {endereco: {rua, numero, cep= 'cep desconhecido'}} = Pessoa
console.log(`${rua}, ${numero} - ${cep}`)