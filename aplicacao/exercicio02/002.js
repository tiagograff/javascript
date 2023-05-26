//Faça um algoritmo, em javascript, que leia um número inteiro e calcule o quadrado e o cubo deste número
//através de funções.

const numero = Number.parseInt(prompt('entre com o valor: '));

const calculaQuadrado = (numero) => quadrado = Math.pow(numero,2)
const calculaCubo = (numero) => cubo = Math.pow(numero,3)
calculaQuadrado(numero)
calculaCubo(numero)
console.log(`o quadrado é: ${quadrado} e o cubo é: ${cubo}`)