let frutas = []
let laticineos = []
let congelados = []
let doces = []
let outros = []
let ok = true

while (ok === true){
    const escolha = prompt('deseja adicionar uma comida na sua lista de compras? "sim" ou "não"')
if (escolha.toLowerCase() === 'sim'){
    let comida = prompt('qual comida você deseja inserir?')
    let numero = prompt(`onde você deseja inserir ${comida}
    1. frutas
    2. laticineos
    3. congelados
    4. doces
    5. outros`)
    if (numero === '1'){
        frutas.push(comida)
    }else if (numero === '2'){
        frutas.push(comida)
    }else if (numero === '2'){
        frutas.push(comida)
    }else if (numero === '3'){
        frutas.push(comida)
    }else if (numero === '4'){
        frutas.push(comida)
    }else if (numero === '5'){
        frutas.push(comida)
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

let i = 0

const mostraLista = (array) => {
    array.forEach(element => {
        alert(`lista ${i}:
        ${element}`)
        i++
    })
}

mostraLista(frutas)
mostraLista(laticineos)
mostraLista(congelados)
mostraLista(doces)
mostraLista(outros)

// 