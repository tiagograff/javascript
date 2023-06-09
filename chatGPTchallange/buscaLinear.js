function buscaString (array, valor){
    for(i = 0; i < array.length; i++){
        if(array[i] === valor){
            return true
        }
    }
    return false
}

let array = ['ola', 'mundo']
let valor = 'mundo'
console.log(buscaString(array, valor))