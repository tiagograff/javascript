//Faça um algoritmo, em javascript, que leia três números e identifique qual o MAIOR, escrevendo este numero na
//tela.

const numb1 = Number(prompt('entre com o primeiro valor'))
const numb2 = Number(prompt('entre com o segundo valor'))
const numb3 = Number(prompt('entre com o terceiro valor'))

if (numb1 > numb2 && numb1 > numb3) {
    console.log(`o numero ${numb1} é o maior`)
}else if (numb2 > numb3 && numb2 > numb1){
    console.log(`o numero ${numb2} é o maior`)
}else{
    console.log(`o numero ${numb3} é o maior`)
}