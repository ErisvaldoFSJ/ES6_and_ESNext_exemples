// não aceita repetição e não é indexado

const times = new Set()

times.add('Vasco').add('Flamengo').add('sp').add('corintians')

console.log(times)
console.log(times.size)
console.log(times.has('sp'))
times.delete('Flamengo')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia']
const nomesSet =  new Set(nomes)
console.log(nomesSet)