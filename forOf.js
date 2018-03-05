for (let letra of "cod3r") {
    console.log(letra)
}

const assuntos = ['map', 'set', 'promesses']
for (let i in assuntos) {
    console.log(i)
}
for (let assunto of assuntos) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['MAp', {
        abordado: true
    }],
    ['Set', {
        abordado: true
    }],
    ['promesses', {
        abordado: false
    }],
])
for (let assunto of assuntosMap) {
    console.log(assunto)
}
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
for (let valores of assuntosMap.values()) {
    console.log(valores)
}
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}