var inicio = -6
var fim = 1
var passo = -1



if (inicio != "" && inicio != Number()) {
    if (fim >= 0 && fim != "" && fim != Number()) {
        if (passo != "") {
            for (inicio; inicio <= fim; inicio += passo) {
                console.log(inicio)
            }
        } else console.log("[Erro!] Passo Inválido! Tente Novamente.")
    } else console.log("[Erro!] Fim Inválido! Tente Novamente.")
} else console.log("[Erro!] Início Inválido! Tente Novamente.")




