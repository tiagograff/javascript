//entre com três números e dica qual é o maior e qual é o menor valor

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

if (numb1 < numb2 && numb1 < numb3) {
    console.log(`o numero ${numb1} é o menor`)
}else if (numb2 < numb3 && numb2 < numb1){
    console.log(`o numero ${numb2} é o menor`)
}else{
    console.log(`o numero ${numb3} é o menor`)
}