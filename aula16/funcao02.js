// criei a função e passei os parâmetros formal
function soma(n1, n2) {
  return n1 + n2
}
// aqui estou chamando a função e passando dos parâmentros reais.
// nesse caso, se deixar de passar um dos parâmentros o resultado é NaN pq o parâmentro não passado é = Undefined
console.log(soma(2, 5))

// parâmentros opcionais, no caso se um dos parâmetros não for repassado ele vai considerrar com 0
function soma02(n1=0, n2=0) {
  return n1 + n2
}
console.log(soma02(2))