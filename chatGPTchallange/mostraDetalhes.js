const pessoa = {
    nome: 'tiago',
    sobrenome: 'graffunder',
    idade: 22,
    humano: true
}

function mostraDetalhes(object){
    for(chave in object){
        let nomeAtributo = object[chave]
        console.log(`chave: ${chave} --> valor: ${nomeAtributo}`)
    }
}

console.log(mostraDetalhes(pessoa));