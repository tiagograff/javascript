let definirEscolha = () => {
    let escolha = prompt(`digite qual operação você deseja efeturar:

    1. soma
    2. subtração
    3. divisão
    4. multiplicação`)

    return escolha
}

let soma = (valor1, valor2) => {
    let soma = valor1 + valor2
    return soma
}

let subtracao = (valor1, valor2) => {
    let subtracao = valor1 - valor2
    return subtracao
}

let divisao = (valor1, valor2) => {
    let divisao = valor1 / valor2
    return divisao
}

let multiplicacao = (valor1, valor2) => {
    let multiplicacao = valor1 * valor2
    return multiplicacao
}

let ok = true
let maisUmaVez = ""

while (ok === true) {
    let valor1 = Number(prompt(`digite o primeiro valor`))
    let valor2 = Number(prompt(`digite o segundo valor`))
    let escolha = Number(definirEscolha())
    if (escolha === 1){
        let total = soma(valor1, valor2).toFixed(2)
        alert(`a soma total é de: ${total}`)
    }else if (escolha === 2){
        let total = subtracao(valor1, valor2).toFixed(2)
        alert(`a subtração total é de: ${total}`)
    }else if (escolha === 3){
        let total = divisao(valor1, valor2).toFixed(2)
        alert(`a divisão total é de: ${total}`)
    }else if (escolha === 4){
        let total = multiplicacao(valor1, valor2).toFixed(2)
        alert(`a multiplicação total é de: ${total}`)
    }else{
        alert(`valor inválido, tente novamente!`)
    }

    maisUmaVez = prompt(`deseja fazer mais uma operação? "sim" ou "não"?`)
    if (maisUmaVez === "sim"){
        ok = true
    }else{
        ok = false
        alert('até a próxima!')
    }
}