//Crie um programa que leia dois números reais e calcule a SOMA, PRODUTO e MÉDIA entre esses
//números.
const num1 = Number(prompt('entre com o primeiro valor'))
const num2 = Number(prompt('entre com o segundo valor'))

const soma = num1 + num2
const produto = num1 * num2
const media = (num1 + num2)/2

console.log(`a soma desses valores é de ${soma}, o produto é ${produto} e a média é ${media}`)