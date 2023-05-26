//entre com 3 numeros e diga quais são os negativos e quais são os positivos

const numb1 = Number(prompt('entre com o primeiro valor'))
const numb2 = Number(prompt('entre com o segundo valor'))
const numb3 = Number(prompt('entre com o terceiro valor'))

const sinal = (numero) => numero >= 0 ? console.log(`o numero é positivo`) : console.log(`o numero é negativo`)

sinal(numb1)
sinal(numb2)
sinal(numb3)