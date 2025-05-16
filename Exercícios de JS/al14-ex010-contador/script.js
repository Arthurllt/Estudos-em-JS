function verificar() {

    var finic = document.getElementById("txtinic")
    var ffnl = document.getElementById("txtfnl")
    var fcont = document.getElementById("txtcont")
    var res = document.getElementById("res")

    if ( finic.value.length == 0 || ffnl.value.length == 0 || fcont.value.length == 0 ) {

        window.alert("[ERRO] Verifique se tem campos nulo")
    
    } else {

        res.innerHTML = "Contando: <br>"

        var i = Number(finic.value)
        var f = Number(ffnl.value)
        var c = Number(fcont.value)

        if (c <= 0 ){

             window.alert("[ERRO] Verifique o campo contagem! Considerando CONTAGEM 1")
             c = 1

        }

        
      
        if ( i <=  f ) {

            if ( c > (f - i)) {
                window.alert("[ERRO] Verifique o campo contagem")
            }else {
        
                for (var t = i ; t <= f ; t += c) {
                res.innerHTML += ` ${t} \u{1F449}` 
                }
                res.innerHTML += ` \u{1F3C1}`
            }
        
        } else if ( i > f) {

             if ( c > (i - f)) {
                window.alert("[ERRO] Verifique o campo contagem")
            }else {

                for (var t = i ; t >= f ; t -= c) {
                res.innerHTML += ` ${t} \u{1F449}` 
                }
                res.innerHTML += ` \u{1F3C1}`
        
            }
        }

    }   
    
}
    