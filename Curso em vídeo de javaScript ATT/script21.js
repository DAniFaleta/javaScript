let amigo = {nome:'Daniel', 
idade:15, 
peso: 85.4,
 engordar(p=0){
     console.log('Engordou')
     this.peso += p
 }}
amigo.engordar(5)
console.log(`${amigo.nome} faleta tem, ${amigo.idade} anos, e pesa ${amigo.peso} Kg`)