let listaCredor = []
let listasDeCredores = []
let printLetra = ''

const adcionaCredor = () => {
    listaCredor = []
    let ok = true
    while (ok){
        let credor = prompt('digite o nome do credor a ser adcionado: ')
        listaCredor.push(credor)
        let adcionarMais = prompt('deseja adcionar mais um credor? digite "não/n" ou "sim/s"')
        if (adcionarMais === 'não' || adcionarMais === 'n'){
            ok = false
        }else if (adcionarMais === 'sim' || adcionarMais === 's'){
            ok = true
        }else{
            alert('valor inválido, tente novamente')
        }
    }
    
    return listaCredor
}

function dividirArrayOrdenado(listaCredor) {
    const listaCredorOrdenado = listaCredor.sort()
    const listaCredorDividido = []
    listaCredorOrdenado.forEach(elemento => {
        const letra = elemento.charAt(0).toLowerCase()

        if(!listaCredorDividido[letra]){
            listaCredorDividido[letra] = []
        }
        listaCredorDividido[letra].push(elemento)
    })
    return listaCredorDividido
}

function procuraPorLetra(listasDeCredores, letra) {
    let listaX = listasDeCredores[letra]
    alert(listaX)
}

listaCredor = adcionaCredor()
listasDeCredores = dividirArrayOrdenado(listaCredor)
let letraX = prompt('digite a letra que deseja buscar o credor:')
procuraPorLetra(listasDeCredores, letraX)