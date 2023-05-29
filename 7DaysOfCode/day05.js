let frutas = []
let laticineos = []
let congelados = []
let doces = []
let outros = []
let ok = true

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