// Orientação a Objetos

// Array é um Objeto (Portanto, são Estruturas da mesma Classe/Origem)
let num = []
console.log(typeof num)

// Objeto é um objeto (Portanto, são Estruturas da mesma Classe/Origem)
let amigo = {}
console.log(typeof amigo)
console.log("---------------------------------------------------------------")

amigo = {
    nome: "José",
    sexo: "M",
    peso: 85.4,
    engordar(p) {
        console.log("Engordou")
        this.peso += p
    },
}

console.log(amigo)
console.log(amigo.nome)
console.log(`O ${amigo.nome} está pesando ${amigo.peso}Kg.`)
console.log("---------------------------------------------------------------")

// Podemos colocar Funções dentro de Variáveis (é uma Evolução da Linguagem)
amigo.engordar(-2)
console.log(`O ${amigo.nome} está pesando ${amigo.peso}Kg.`)
console.log("---------------------------------------------------------------")

/*
 Nova ECMA Script tem a permissão da Criação de Classes que possibilita
 conseguirmos replicar Objetos com as mesmas características.
*/

