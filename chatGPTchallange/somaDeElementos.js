function  somaDeElementos (){
    let array = []
    let valores = Number(prompt('entre com um valor para o array: '))
    array.push(valores)
    let ok = true
    while (ok === true) {
        let escolha = prompt('você deseja adcionar mais um valor ao array? "sim" ou "não"')
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

    let somaArray = 0;

    array.forEach(function (nota,_) {
        somaArray += nota
    })

    return somaArray
}

resultado = somaDeElementos()

alert(`o resuldado da soma dos elementos é o seguinte ${resultado}`)