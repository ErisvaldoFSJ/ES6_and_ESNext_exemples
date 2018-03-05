// let e const 
{
    var a = 2
    let b = 3
}
console.log(a)
//console.log(b) b não consegue enchergar fora do laço, let tem escopo de bloco

//template string
const produto = 'ipad'
console.log(`${produto} é caro`)

//destructuring
const [l, e, ...tras] = "cod3r"
console.log(l,e,tras)

const [x, ,y] = [1,2,3]
console.log(x,y)

const {idade, nome} = {nome: 'ana', idade: 14}
console.log(idade, nome)

