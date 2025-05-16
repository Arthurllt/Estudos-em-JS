function carregar(){

    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
     var hora = data.getHours()

    // hora = 19


    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {

        img.src = "fotos/fotomanha.png"
        document.body.style.background =  '#a9bac2'

    } else if (hora >= 12 && hora <= 18) {

        img.src = "fotos/fototarde.png"
        document.body.style.background = "#ff8f3b"

    } else {

        img.src = "fotos/fotonoite.png"
        document.body.style.background = "#061214"
    }
}