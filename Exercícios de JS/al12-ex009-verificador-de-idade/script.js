function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano") // formulario ano 
    var res = document.getElementById("res")

    if (fano.value.length == 0 || fano.value > ano) {

        window.alert("[ERRO] Verifique os dados e tente novamente!")

    } else {

        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var img = document.createElement("img")
        img.setAttribute("id", "foto") /* a seuqencia desse var img + img.setAttribute é a mesma coisa que criar um elemento em HTML com id="foto" */
        var gênero = " "
        if (fsex[0].checked) {
            gênero = "Homem"

            if (idade >= 0 && idade < 10) {
                //ciança 
                //gênero = "gorotinho"
                img.setAttribute("src", "fotos/menino.png") // permite acesssar a imagem
            } else if (idade < 21) {
                //jovem
                //gênero = "menino"
                img.setAttribute("src", "fotos/foto-h-adolescente.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "fotos/foto-homem.png")
            } else {
                //idoso 
                //gênero = "senhor"
                img.setAttribute("src", "fotos/senhor.png")
            }
            

        }else if (fsex[1].checked) {
            gênero = "Mulher"

            if (idade >= 0 && idade < 10) {
                //ciança 
                img.setAttribute("src", "fotos/foto-menina.png")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "fotos/foto-m-adolescente.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "fotos/mulher.png")
            } else {
                //idoso 
                img.setAttribute("src", "fotos/senhora.png")
            }

        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // Add um elemento. 
    }
}

