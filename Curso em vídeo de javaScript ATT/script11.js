function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = new Date()
var minuto = min.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
if (hora >= 0 && hora <12) {
    // Manhã
    img.src = 'manhã.jpg'
    document.body.style.background = '#e2cd9f'
} 
else if(hora >= 12 && hora < 18) {
    // Tarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#b9846f'
} 
else{
    // Noite
    img.src = 'noite.jpg'
    document.body.style.background = '#515154'
}
}


