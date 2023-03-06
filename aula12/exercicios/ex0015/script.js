function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    // Descomentar a Linha abaixo para forçar a Hora:
    // hora = 13

      msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/fotomanha.png'
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/fototarde.png'
        document.body.style.background = "#b9846f"
    } else {
        img.src = 'img/fotonoite.png'
        document.body.style.background = "#515154"
    }
}

