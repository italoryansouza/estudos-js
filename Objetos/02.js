// MÉTODOS EM OBJETOS

let objeto = {
    nome: "Ítalo",
    idade: "19",
    altura: "1.74",
    cidade: "Cabo de Santo Agostinho",
    falar: function(){
        console.log(`Olá, ${this.nome}! Seja bem vindo!`)
    }
}

objeto.falar()

// ITERANDO SOBRE OS ITENS DE UM OBJETO

for (let chave in objeto){
    objeto[chave] = objeto[chave] + " lindo"
}

console.log(objeto)