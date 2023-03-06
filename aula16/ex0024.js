// Calcular o Fatorial de um Número (de forma Recursiva):
// Quando uma função chama ela mesma.

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 5! = 5 * 4!
// n! = n * (n-1)!
// 1! = 1

// Recursividade
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

let x = 5
console.log(fatorial(x))