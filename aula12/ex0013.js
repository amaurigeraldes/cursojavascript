// Pegar a Hora Atual do Sistema:
var agora = new Date()
var hora = agora.getHours()

hora = 23
console.log(`Agora são extamente ${hora} horas.`)

if (hora <= 12 && hora > 0) {
    console.log("Bom Dia!")
} else if (hora <= 18 && hora > 12) {
    console.log("Boa Tarde!")
} else {
    console.log("Boa Noite!")
}