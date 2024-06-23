

function horaDoDia(){

    var division = document.getElementById("img")
    const now = new Date();
    const hora = now.getHours();
    
    document.getElementById('text').innerHTML = `Agora são ${hora} horas`
    console.log(hora)

// Limpando as classes da divisão

    if (division.classList.contains("bom-dia")){
        division.classList.remove("bom-dia")
    } else if (division.classList.contains("boa-tarde")){
        division.classList.remove("boa-tarde")
    } else if (division.classList.contains("boa-noite")){
        division.classList.remove("boa-noite")
    }

    if (hora >= 0 && hora < 12){
        division.classList.add("bom-dia")
    } else if (hora >= 12 && hora < 18) {
        division.classList.add("boa-tarde")
        document.body.style.backgroundColor = 'green'
    } else {
        division.classList.add("boa-noite")
        document.body.style.backgroundColor = 'black'
    }
}

// Para mudar atributos de um elemento é só utilizar o nome da variável armazenada.atributo a ser mudado:

// Ex: var img = document.getElementByIy("imagem")
// var.scr = "fotodetarde.png"
