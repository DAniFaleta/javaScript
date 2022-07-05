var agora = new Date();
var diaSam = agora.getDay()

switch(diaSam){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira') 
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sabasdo')   
        break
        default:
            console.log('[ERRO] Dia Inválido')
            break                  
}