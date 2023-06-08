let string = prompt('digite uma frase')
vogais = ['a', 'e', 'i', 'o', 'u']
contador = 0

for (i = 0; i < string.length; i++) {
    if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
        contador++
    }
}

alert(contador)