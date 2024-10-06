console.log('-----------------');

const aprovados = ['João', 'Pedro', 'Daniel', 'Ronaldo', 'Cesar', 'Maria']

//Forma tradicional
aprovados.forEach(function(nome, i) {
    console.log('Nome do aprovado: ' + (i+1) + ' ' + nome)
})

//Arrow Function
aprovados.forEach(nome => {
    console.log('Nome do aprovado: ' + nome)
})

aprovados.forEach(nome => console.log('Outra forma de exibir o nome do: ' + nome))



//Armazenar uma função numa "variavel"
const exibirAprovados = aprovado => console.log('function variable: ' + aprovado)

aprovados.forEach(exibirAprovados)

Array.prototype.meuForEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const exibirAprovados2 = aprovado => console.log('function variable with meuForEach: ' + aprovado)

aprovados.meuForEach(exibirAprovados2)