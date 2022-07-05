let valores = [4,1,6,8,7,3,2,5]
valores.sort()
/*for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(valores)
*/
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // os códigos digitados são os mesmos, só muda a simplificação de código! escrever menos códigos
console.log(valores)