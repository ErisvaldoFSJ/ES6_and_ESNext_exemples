// arrow function
const soma = (a,b) => a + b
console.log(soma(2,4))

//arrow function (this)
const lexico1 = () => console.log(this === exports)

// parametros defoult
function log ( texto = 'valor padrão'){
    console.log(texto)
}
log()
log('sou outro valor')

// operador ...rest / spred
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,3))