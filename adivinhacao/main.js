let escolha = 'sim';
let numeroAleatorio = 0;
let ok = false;
let chances = 2;

const geraNumeroAleatorio = (() => {
    let numeroAleatorio = Math.floor(Math.random() * (10) + 1);
    return numeroAleatorio;
});


alert('bem vindo(a), vamos jogar um jogo de advinhação, você precisa chutar um número de 1 - 10 e acerta-lo em três tentativas')
numeroAleatorio = geraNumeroAleatorio();
console.log(numeroAleatorio);

for (let i = 0; i < 3; i++) {

    let chute = Number(prompt('um número de 1 - 10'));
    
    while (ok === false){
        if (chute < 0 || chute > 10){
            alert('chute inválido, tente novamente');
            chute = Number(prompt('tente novamente com um número de 1 - 10'));
            ok = false;
        }else{
            ok = true;
        }
    }

    if (numeroAleatorio === chute){
        alert(`parabéns você acertou, o número era: ${numeroAleatorio}`);
        break;
    }else{
        if (numeroAleatorio < chute){
            alert(`seu número é menor que o valor misterioso! mas você tem mais ${chances} chance(s) `);
            chances--;
            ok = false;
        }else{
            alert(`seu número é maior que o valor misterioso! mas você tem mais ${chances} chance(s) `);
            chances--;
            ok = false;
        }
    }
}