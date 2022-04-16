function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.getElementById('txtano').value
  var res = document.getElementById('res')

  if (fAno.length == 0 || fAno > ano) {
    alert('[ERRO] Verifique as informações e tente novamente.')
  } else {
    var sexo = document.getElementsByName('radsex')//ele tem duas posições [0]=>MASCULINO e [1]=>FEMININO
    var idade = ano - fAno
    var genero = ''
    var img = document.createElement('img')//criando um elemento IMG com JS.
    img.setAttribute('id', 'foto')//atribuindo um ID FOTO ao elemento.
    if (sexo[0].checked) {//se o SEXO MASCULINO estiver marcado(cheched) então...
      genero = 'homem'
      if (idade >=0 && idade < 10) {  //criança
        img.setAttribute('src', 'images/crianca-masculino.png')
      } else if (idade < 21) {  //jovem
        img.setAttribute('src', 'images/jovem-masculino.png')
      } else if (idade < 50) {  //adulto
        img.setAttribute('src', 'images/adulto-masculino.png')
      } else {  //idoso
        img.setAttribute('src', 'images/idoso-masculino.png')
      }
    } else {
      genero = 'mulher'
      if (idade >= 0 && idade < 10) { //criança
        img.setAttribute('src', 'images/crianca-feminino.png')
      } else if (idade < 21) {  //jovem
        img.setAttribute('src', 'images/jovem-feminino.png')
      } else if (idade < 50) {  //adulto
        img.setAttribute('src', 'images/adulto-feminino.png')
      } else {  //idoso
        img.setAttribute('src', 'images/idoso-feminino.png')
      }
    }
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(img)//adicionar um filho(Child)
  }
}