//Faça um programa que determine o volume de uma esfera, através da leitura do raio:
// V = 4/3 (PI*R^3)

const raio = Number(prompt('entre com o valor do raio para descobrir o seu volume: '))
const volume = (Math.PI*Math.pow(raio,3))*(4/3)

console.log(`o volume é : ${volume}`)