function ordena(array){
    array.sort()
    return array
}

let array = []
let ok = true

while (ok) {
    let escolha = prompt('você deseja adcionar um valor ao array? "sim" ou "não"')
    if (escolha === 'sim'){
        valores = Number(prompt('entre com um valor para o array: '))
        array.push(valores)
        ok = true
    }else if (escolha === 'não'){
        alert('ok')
        ok = false
    }else{
        alert('valor inválido, tente novamente')
    }
}

ordenou = ordena(array)
alert(`o array ordenado ficou ${ordenou}`)