// INTRODUÇÃO AOS OBJETOS

let objeto = {
    nome: "Ítalo",
    idade: 19,
    altura: 1.74,
    cidade: "Cabo de Santo Agostinho "
} 

console.log(objeto)

console.log(`Temos o nome: ${objeto.nome}. Haverá uma mudança...`)

objeto.nome = "Andrezza"

console.log(objeto)

console.log(`Agora terá mais uma mudança...`)

objeto.profissão = "Engenheira Civil"
delete objeto.cidade;

console.log(objeto)

