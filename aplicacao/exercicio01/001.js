//Faça um programa que calcule o perímetro de um retângulo, sendo dado o comprimento e a largura
//desse retângulo: P = 2x(c+l)

const comprimento = Number(prompt('entre com o valor de comprimento'))
const retangulo = Number(prompt('entre com o valor a largura'))
const perimetro = ((c,l) => {
    const P = 2*(c+l)
    console.log(`o perimetro do retangulo é de: ${P}`)
})
perimetro(comprimento, retangulo)