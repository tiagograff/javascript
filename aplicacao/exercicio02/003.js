//Crie um algoritmo, em javascript, que calcule o número de eleitores do município, se baseando no número de
//votos brancos, nulos e válidos. Faça uma função para cada solicitação.
//Calcular e escrever o percentual que cada número de votos representa em relação ao total de eleitores 
//também através de funções.

solicitaBrancos = (votos) => votos = Number(prompt('numero de votos branco'))
solicitaNulos = (votos) => votos = Number(prompt('numero de votos nulos'))
solicitaValidos = (votos) => votos = Number(prompt('numero de votos validos'))
const votosBranco = solicitaBrancos()
const votosNulos = solicitaNulos()
const votosValidos = solicitaValidos()

const total = (brancos, nulos, validos) => (brancos + nulos + validos)
const votosTotal = total(votosBranco, votosNulos, votosValidos)

const percentual = (votos) => (votos/votosTotal)*100
const percentualBranco = percentual(votosBranco).toFixed(2)
const percentualNulos = percentual(votosNulos).toFixed(2)
const percentualValidos = percentual(votosValidos).toFixed(2)

console.log(`o percentual de votos brancos foi de ${percentualBranco}, percentual nulos ${percentualNulos} e percentual validos ${percentualValidos}`)