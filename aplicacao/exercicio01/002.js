//Faça um algoritmo, em javascript, que leia dois valores inteiros (A e B) e troque o conteúdo dessas variáveis.
//Depois mostre as duas variáveis com os valores já trocados.

let numeroA = parseInt(prompt('entre com o valor de A: '))
let numeroB = parseInt(prompt('entre com o valor de B: '))
let x = numeroA
numeroA = numeroB
numeroB = x
console.log(`agora o valor de A: ${numeroA} e o valor de B: ${numeroB}`)