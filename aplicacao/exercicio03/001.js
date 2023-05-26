//Escreva um programa que leia um número digitado pelo usuário e identifique se este número é PAR ou
//IMPAR.

const numero = Number(prompt('entre com um número e descubra se é ímpar ou par: '))

if (numero %2 == 0){
    console.log('este numero é par')
}else{
    console.log('este numero é ímpar')
}