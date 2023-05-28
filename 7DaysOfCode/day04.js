const number = Math.floor(Math.random() * (0 + 10))
let tentativas = 0
let acerto = false

while (acerto === false && tentativas < 3){
    let chute = Number(prompt(`chute um numero, essa é a sua tentativa numero ${tentativas + 1}`))
    if (chute === number){
        alert('você acertou parabéns!')
        acerto = true
        break
    }else{
        alert('você errou!')
        tentativas++
    }
}
alert (`o número certo é: ${number}`)