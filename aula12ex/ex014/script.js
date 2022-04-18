function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')

  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()

  msg.innerHTML = `<p>Agora são ${hora}:${minutos}h.</p>`

  if (hora >= 0 && hora < 12) { //Bom dia!
    img.src = 'images/foto-manha.png' //A VAR IMG está contendo a estrutura HTML(<img src"">),
                              // o que estou fazendo é acessar os valores do atributo SRC que está em IMG.
    document.body.style.background = '#E2CD9F'
  } else if (hora >= 12 && hora < 18) { //Boa tarde!
    img.src = 'images/foto-tarde.png'
    document.body.style.background = '#B9846F'
  } else {  //Boa noite!
    img.src = 'images/foto-noite.png'
    document.body.style.background = '#515154'
  }
}
