// ES8: Object.values, Object.etries
const obj = { a:1, b:2, c:3}

console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notação de obj
const nome = 'carla'
const pessoa = {
    nome,
    ola(){return 'ola gente'},
}
console.log(pessoa.nome, pessoa.ola())

// Class 
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'auau'
    }
}

console.log(new Cachorro().falar())

