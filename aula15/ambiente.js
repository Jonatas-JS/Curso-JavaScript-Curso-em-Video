let num = [5, 8, 2, 9, 3]
// mostro quantos elementos tenho no Array
console.log(num.length)
//  Acrescenta um elementro no final do Array
num.push(1)
//ordeno em ordem crescente
num.sort()
console.log(`Nosso vetor é o ${num}`)

// indexOf me retorna retorna a posição atual do valor que eu estou procurando()
let pos = num.indexOf(8)
if (pos == -1) {
  console.log(`O valor ${pos} não existe no Array`)
} else {
  console.log(`O valor está na posição ${pos}`)
}