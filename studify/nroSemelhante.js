let escolha = Number(prompt('escolha um número de 1 a 10'));
let array = [];
if (escolha > 0 && escolha < 11){
    for (let i = 0; i<escolha; i++) {
        let nroAleatorio = Math.floor(Math.random()*10 + 1)
        array.push(nroAleatorio);
    }
    console.log(array)
}else{
    alert('você digitou um número inválido');
}

var counts = {};

array.forEach((element) =>{
    counts[element] = (counts[element] || 0) + 1;
})

console.log(counts)