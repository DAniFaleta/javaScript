function verificar() {
   var txt = window.document.getElementById('textvel')
   var res = window.document.getElementById('res')
   var val = (txt.value)
   res.innerHTML = "<h2>Você é Estrangeiro!</h2>"
   if (val == 'Brasil'){
      res.innerHTML = `<h2>Você não é Estrangeiro e mora no ${val}</h2>`
   } 
}
