function contar() {
  let inicio = Number(document.querySelector('#inicio').value)
  let fim = Number(document.querySelector('#fim').value)
  let passo = Number(document.querySelector('#passo').value)
  let resposta = document.querySelector('.resposta')
  
  if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
    alert('[ERRO] Faltam dados!')
  } else {
    resposta.innerHTML = `Contando: `
    if (inicio < fim) {
      for (let cont = inicio; cont <= fim; cont += passo) {
        resposta.innerHTML += ` ${cont} \u{1F449}`
      }
    } else {
      for (let cont = inicio; cont >= fim; cont -= passo) {
        resposta.innerHTML += ` ${cont} \u{1F449}`
      }
    }
    resposta.innerHTML += `\u{1F3C1}`
  }
}