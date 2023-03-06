// Criando a Função
function parimpar(n) {
    if (n % 2 == 0) {
        return `O número ${n} é Par!`
    } else {
        return `O número ${n} é Impar!`
    }
}

// Chamando a Função e passando o Parâmetro
let x = 10
console.log(parimpar(x))