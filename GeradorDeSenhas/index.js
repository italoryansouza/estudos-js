let tamanho = document.querySelector('#input')
let gerarButton = document.querySelector('#gerar')
let contS = document.querySelector("#senha")

gerarButton.addEventListener('click', function(){
    let comprimento = tamanho.value

    let senha = gerarSenha(comprimento)
    

    let senhagerada = document.createElement('p')
    senhagerada.textContent = senha
    contS.appendChild(senhagerada)
    
    contS.style.display = 'flex'
})

function gerarSenha(comprimento){
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&_.'

    let senha = ''

    for(let i = 0; i < comprimento; i++){
        let indice = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[indice]
    }

    return senha
}