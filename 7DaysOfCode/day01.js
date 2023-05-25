let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

const comparaVariaveis = (number, string) => (number === string) ? console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes') : console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')

comparaVariaveis(numeroUm, stringUm)
comparaVariaveis(numeroDez, stringTrinta)
comparaVariaveis(numeroTrinta, stringTrinta)