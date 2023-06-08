alert('vamos ver se sua string é um palíndromo?')
let string = prompt('entre com a string: ')
let palindromo = string.split('').reverse('').join('')
let isPalindromo = false
if (string === palindromo){
    isPalindromo = true
    console.log(isPalindromo)
}else{
    console.log(isPalindromo)
}