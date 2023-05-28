const escolha1 = prompt('escolha entre "front-end" e "back-end"')

if (escolha1.toLowerCase() === 'front-end' || escolha1.toLowerCase() === 'front end') {
    const escolha2 = prompt('você quer aprender "react" ou "vue"?')
    if (escolha2.toLowerCase() === 'react') {
        const escolha3 = prompt('você prefere seguir se especializando na "área escolhida" ou seguir se desenvolvendo para se tornar "fullstack"')
        if (escolha3.toLowerCase() === 'área escolhida' || escolha3.toLowerCase() === 'area escolhida' || escolha3.toLowerCase() === 'fullstack'){
            alert(`o caminho a se trilhar será o seguinte, você começara com ${escolha1} e depois trilhara para ${escolha2}. por fim se especializara em ${escolha3}`)
            let msg = prompt('tem mais alguma tecnologia que você gostaria de aprender? digite "não" para sair')
            while (msg.toLocaleLowerCase() !== 'não'){
                let novaTecnologia = prompt("qual?")
                alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
                msg = prompt('tem mais alguma tecnologia que você gostaria de aprender? digite "não" para sair')
            }
        }else{
            console.log('valor inválido, tente novamente')
        }
    }else if (escolha2.toLowerCase() === 'vue') {
        const escolha3 = prompt('você prefere seguir se especializando na "área escolhida" ou seguir se desenvolvendo para se tornar "fullstack"')
        if (escolha3.toLowerCase() === 'área escolhida' || escolha3.toLowerCase() === 'area escolhida' || escolha3.toLowerCase() === 'fullstack'){
            alert(`o caminho a se trilhar será o seguinte, você começara com ${escolha1} e depois trilhara para ${escolha2}. por fim se especializara em ${escolha3}`)
            let msg = prompt('tem mais alguma tecnologia que você gostaria de aprender? digite "não" para sair')
            while (msg.toLocaleLowerCase() !== 'não'){
                let novaTecnologia = prompt('qual?')
                alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
                msg = prompt('tem mais alguma tecnologia que você gostaria de aprender? digite "não" para sair')
            }
        }else{
            console.log('valor inválido, tente novamente')
        }
    }else{
        console.log('valor inválido, tente novamente')
    }
}else if (escolha1.toLowerCase() === 'back-end' || escolha1.toLowerCase() === 'back end'){
    const escolha2 = prompt('você vai querer aprender "C#" ou aprender "java"?')
    if (escolha2.toLowerCase() === 'c#'){
        const escolha3 = prompt('você prefere seguir se especializando na "área escolhida" ou seguir se desenvolvendo para se tornar "fullstack"')
        if (escolha3.toLowerCase() === 'área escolhida' || escolha3.toLowerCase() === 'area escolhida' || escolha3.toLowerCase() === 'fullstack'){
            alert(`o caminho a se trilhar será o seguinte, você começara com ${escolha1} e depois trilhara para ${escolha2}. por fim se especializara em ${escolha3}`)
            let msg = prompt('tem mais alguma tecnologia que você gostaria de aprender? digite "não" para sair')
            while (msg.toLocaleLowerCase() !== 'não'){
                let novaTecnologia = prompt('qual?')
                alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
                msg = prompt('tem mais alguma tecnologia que você gostaria de aprender? digite "não" para sair')
            }
        }else{
            console.log('valor inválido, tente novamente')
        }
    }else if (escolha2.toLowerCase() === 'java'){
        const escolha3 = prompt('você prefere seguir se especializando na "área escolhida" ou seguir se desenvolvendo para se tornar "fullstack"')
        if (escolha3.toLowerCase() === 'área escolhida' || escolha3.toLowerCase() === 'area escolhida' || escolha3.toLowerCase() === 'fullstack'){
            alert(`o caminho a se trilhar será o seguinte, você começara com ${escolha1} e depois trilhara para ${escolha2}. por fim se especializara em ${escolha3}`)
            let msg = prompt('tem mais alguma tecnologia que você gostaria de aprender? digite "não" para sair')
            while (msg.toLocaleLowerCase() !== 'não'){
                let novaTecnologia = prompt("qual?")
                alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
                msg = prompt('tem mais alguma tecnologia que você gostaria de aprender? digite "não" para sair')
            }
        }else{
            console.log('valor inválido, tente novamente')
        }
    }else{
        console.log('valor inválido, tente novamente')
    }
}else{
    console.log('valor inválido, tente novamente')
}