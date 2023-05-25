const nome =  prompt('qual é o seu nome?')
const idade = prompt("qual é a sua idade?")
const linguagem = prompt("qual linguagem de programação você estuda?")

console.log(`olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

const pergunta = prompt("você esta gostando de aprender? se sim digite 1 se não digite 2")

if(pergunta == 1){
  console.log("muito bom! Continue estudando e você terá muito sucesso.")
}else if(pergunta == 2){
  console.log("ahh que pena... Já tentou aprender outras linguagens?")
}else{
  console.log("valor inválido!")
}