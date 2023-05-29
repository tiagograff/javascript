let frutas = []
let laticineos = []
let congelados = []
let doces = []
let outros = []
let ok = true
let ok2 = true

while (ok === true){
    let escolha = prompt('deseja adicionar uma comida na sua lista de compras? "sim" ou "não"')
if (escolha.toLowerCase() === 'sim'){
    let comida = prompt('qual comida você deseja inserir?')
    let numero = Number(prompt(`onde você deseja inserir ${comida}
    1. frutas
    2. laticineos
    3. congelados
    4. doces
    5. outros`))
    if (numero === 1){
        frutas.push(comida)
    }else if (numero === 2){
        laticineos.push(comida)
    }else if (numero === 3){
        congelados.push(comida)
    }else if (numero === 4){
        doces.push(comida)
    }else if (numero === 5){
        outros.push(comida)
    }else{
        alert('valor inválido, tente novamente')
    }
}else if (escolha.toLowerCase() === 'não'){
    alert('ok...')
    ok = false
}else{
    alert('valor inválido')
}
}

alert(`
lista 1: ${frutas}
lista 2: ${laticineos}
lista 3: ${congelados}
lista 4: ${doces}
lista 5: ${outros}`)

while(ok2 === true){
    let escolha2 = prompt('você deseja exluir um item de alguma lista? "sim" ou "não"')
    if (escolha2 === 'sim'){
        let escolha3 = Number(prompt(`digite a lista:
        1. frutas
        2. laticineos
        3. congelados
        4. doces
        5. outros`))

        const removeLista = (array) => {
            alert(`exclua um dos itens: 
            ${array}`)
            let item = prompt(`digite o item que queira exluir`)
            array.splice(array.indexOf(item), 1)
        }
        if (escolha3 === 1){
            removeLista(frutas)
        }else if (escolha3 === 2){
            removeLista(laticineos)
        }else if (escolha3 === 2){
            removeLista(congelados)
        }else if (escolha3 === 2){
            removeLista(doces)
        }else if (escolha3 === 2){
            removeLista(outros)
        }
    }else{
        ok2 = false
    }
}

alert(`
lista 1: ${frutas}
lista 2: ${laticineos}
lista 3: ${congelados}
lista 4: ${doces}
lista 5: ${outros}`)