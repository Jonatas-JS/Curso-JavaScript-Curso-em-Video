// n é uma variável/parâmetro que vai receber o está definido lá em baixo no parImpar()
function parImpar(n) {
  //se o resto da divisão de n for == 0 então n é par
  if (n%2 == 0) {
    return 'Par!'
  } else  {
    return 'Ímpar!'
  }
}
//aqui eu passei o valor que o n vai receber e chamei a função
console.log(parImpar(5))