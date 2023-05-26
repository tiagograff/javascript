//Escreva um programa que receba dois números e, utilizando funções, calcule a média e retorne o
//resultado, mostrando na tela com duas casas depois da vírgula.

const num1 = Number.parseFloat(prompt('entre com o primeiro valor'))
const num2 = Number.parseFloat(prompt('entre com o segundo valor'))

const calculaMedia = (num1, num2) => media = (num1 + num2)/2
calculaMedia(num1, num2).toFixed(2)
console.log((`a media dos valores é de: ${media}`))