let num = document.getElementById('fnum')
let lista = document.getElementById('sele')
let res = document.getElementById('res')
let valores = []
function isNumero(n) {
    if(Number(n) >= 1 && (Number(n) <=100)){
        return true
    } else{
        false
    }
}
function inLista(n, l){
    if(l.indexOf (Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('[ERRO] Valor Inválido ou não encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.lenght == 0) {
        alert('Adicione valores antes de finalizar')
    }
     else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                    maior = valores[pos]
                if(valores[pos] < menor){
                    menor = valores[pos]
                }
            }
        } 
        média = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} Númeors Cadastrados<p/>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor infomado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma} </p>`
        res.innerHTML += `<p>A média dos valores digitados é ${média}</p>`
        
    }
}
