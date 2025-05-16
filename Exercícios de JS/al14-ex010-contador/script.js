function verificar() {

    var finic = window.document.getElementById("txtinic")
    var ffnl = window.document.getElementById("txtfnl")
    var fcont = window.document.getElementById("txtcont")

    if ( finic.value == null ) {

        window.alert("[ERRO] Verifique o valor de início e tente novamente!")
    
    } else if ( ffnl.value <= finic.value){

         window.alert("[ERRO] Você não pode contar numeros negativos")

    } else {

        for (var finic = window.document.getElementById("txtinic"); finic.value <= ffnl.valeu; finic.value + fcont.valeu){

            res.innerHTML = "Contando:"
             res.innerHTML = `${finic}`
        }
    }
}