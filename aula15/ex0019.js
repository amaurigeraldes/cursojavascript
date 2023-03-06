let num = []
console.log(`Nosso vetor é o ${num}`)
console.log(num)
console.log("")

num = [5, 8, 2, 9, 3, "Amaurí"]
num[6] = "Moreira"
num.push("Geraldes")
console.log(`Nosso vetor é o ${num}`)
console.log(num)
console.log(`O primeiro valor do Vetor é ${num[0]}`)
console.log(num.length)
console.log(num.sort())
console.log(`O primeiro valor do Vetor é ${num[0]}`)

console.log("############################")

// Se o valor não existir no Array, ele retornará como resposta -1
let x = num.indexOf(9)
if (x == -1) {
    console.log(x, "O valor não foi encontrado!")
}else {
    console.log(x, `O valor de num.indexOf(9) está na posição ${x}`)
}
console.log("############################")

// Se o valor não existir no Array, ele retornará como resposta -1
let y = num.indexOf(7)
if (y == -1) {
    console.log(y, "O valor de num.indexOf(7) não foi encontrado!")
}else {
    console.log(y, `O valor de num.indexOf(9) está na posição ${y}`)
}
console.log("############################")

for (let i = 0; i < num.length; i++) {
    console.log(i, num[i])
}
console.log("############################")

// Ou, de outra forma mais simples e atual (funciona somente para Arrays e Objetos)
// Para cada posição (i) na variável composta (num), mostrar o num[i]
for (let i in num) {
    console.log(i, num[i])
}

