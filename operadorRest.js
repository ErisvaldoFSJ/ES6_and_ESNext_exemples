const funcionario = {
    nome: 'maria',
    salario: 2344.09
}
const clone ={
    ativo: true,
    ...funcionario
}
console.log(clone)

const grupoA = ['Joao', 'Pedro', 'Maria']
const gurpoB = ['marcos', ...grupoA, 'gloria']
console.log(gurpoB)