var inicio = 1
var fim = 5
var passo = -1



if (inicio != Number()) {
    if (fim != Number()) {
        if (passo != Number()) {
            for (inicio; inicio <= fim; inicio += passo) {
                console.log(inicio)
            }
        } else console.log("[Erro!] Passo Inválido! Tente Novamente.")
    } else console.log("[Erro!] Fim Inválido! Tente Novamente.")
} else console.log("[Erro!] Início Inválido! Tente Novamente.")




