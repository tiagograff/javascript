//Crie um programa que solicite dois números quaisquer. Realize a operação de SOMA entre estes
//números. Mostre a resposta da soma através de função. Caso esta soma resulte em um valor maior que 10,
//adicione mais 5 no valor da soma, caso contrário subtraia 3 do resultado.

const numb1 = Number(prompt('entre com o primeiro numero'))
const numb2 = Number(prompt('entre com o segundo numero'))

const soma = (numb1, numb2) => {
    let somaTotal = numb1 + numb2
    if (somaTotal > 10){
        somaTotal += 5
        console.log(`a soma total: ${somaTotal}`)
    }else{
        console.log(`a soma total: ${somaTotal}`)
    }
}

soma(numb1, numb2)