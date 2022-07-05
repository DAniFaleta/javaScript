var agora = new Date();
var hora = agora.getHours()
var min = new Date();
var minuto = min.getMinutes()
console.log(`Agoa são exatamente ${hora} horas e ${minuto} minutos`)
if(hora <=12){
    console.log('Bom dia')
} else if(hora <= 19){
    console.log('Boa tarde')
} else{
    console.log('Boa noite')
}