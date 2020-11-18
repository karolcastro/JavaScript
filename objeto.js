// colecao dinamica de chaves e valores, sendo possivel adicionar ou remover propriedades

var pessoa = {
    nome: 'João',
    idade: 20,
    telefone: null,
    endereco:{
        logradouro: 'Av. Brasil',
        numero: 70,
        bairro: 'Centro'
    }
};

// console.log(pessoa['nome'])
// console.log(pessoa.endereco)

for(var propriedade in pessoa)
console.log(propriedade + " " + pessoa[propriedade])


//delete
// delete.pessoa.idade