function soma(n1 = 0, n2 = 0){
    return n1 + n2
}

x = 4
y = 9
console.log(soma(x, y))

// Se os parâmetros não forem passados, não retornará NaN,
//  pois as variáveis n1 e n2 foram inicializadas com o 
//  valor 0 dentro da Function.
console.log(soma(x))
console.log(soma(y))
console.log(soma())