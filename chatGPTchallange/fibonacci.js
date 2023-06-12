let numero = Number(prompt('entre com um número inteiro'))

function fibonacci (numero) {
    let sequencia = [0, 1]
    for (let i = 2; i <= numero; i++) {
        const proximoNumero = sequencia[i - 1] + sequencia[i -2]
        sequencia.push(proximoNumero)
    }
    return sequencia
}

const resultado = fibonacci(numero)
alert(resultado)