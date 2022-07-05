function calcular() {
    var txtvel = window.document.getElementById('txtvel')
    var res = window.document.getElementById('res')
    var vel = Number(txtvel.value)
    res.innerHTML = "A sua velocidade atual é de "+ vel+ "<h5>Km/h</h5>"
    if(vel > 80){
        res.innerHTML += "<h4>Você está <strong>MULTADO</strong> por execesso de velocidade</h4>"
    }
}
