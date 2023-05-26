//Crie um algoritmo, em javascript, que leia dois números e, utilizando uma função, apresente na tela em ordem
//CRESCENTE.

const numb1 = Number(prompt('entre com o primeiro numero'))
const numb2 = Number(prompt('entre com o segundo numero'))

const ordena = (numb1, numb2) => {
    if (numb1 > numb2){
        console.log(`${numb2} -> ${numb1}`)
    }else{
        console.log(`${numb1} -> ${numb2}`)        
    }
}

ordena(numb1, numb2)