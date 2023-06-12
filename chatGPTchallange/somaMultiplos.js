let numero = parseInt(prompt('entre com um número inteiro: '))
const multiplosDe3 = []

function validaInt(){
    let ok = false
    while (ok === false){
        if(Number.isInteger(numero) === false) {
            alert('tipo de dado inválido tente novamente')
            ok = false
            numero = Number(prompt('digite um número que seja inteiro: '))
        }else{
            ok = true
        }
    }
    return
}

function somaDeMultiplos(numero){
    let soma = 0
    for (let i = 0; i < numero; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            soma += i
        }
    }
    return soma
}

validaInt(numero)
const imprime = somaDeMultiplos(numero)
alert(`a soma dos numeros multiplos de 3 e 5 abaixo do valor ${numero} é de : ${imprime}`)