function tabuada() {

    var num = document.getElementById("txtn")
    var tab = document.getElementById("seltab")

    if (num.value.lenght == 0) {

        window.alert("[ERRO] Digite um numero")
    
    } else {

        var n = Number(num.value)
        tab.innerHTML = " "
        
        for (c = 1 ; c <= 10 ; c++){

            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}