// Criando a função tabuada 
function tabuada() {
    // Atribuição da variável num e obtenção do Id do Número obtido através do input 
    // Podendo ser qualquer número (inteiro, decimal, 0, positivo ou negativo)
    let num = document.getElementById("txtn")
    // Atribuição da variável tab e obtenção do Id da Lista criada na select
    let tab = document.getElementById("seltab")

    // Verificar se o campo do número não está vazio:
    if (num.value.length == 0) {
        // Se estiver vazio gerar um alerta
        window.alert("Por favor, digite um número!")
    } else {
        // Transformar a variável num obtida através do input em valor
        let n = Number(num.value)

        // Limpar a lista da área da Tabuada para não acumular a tabuada de um número com o de outro número
        tab.innerHTML = ""

        // Criar a Tabuada
        let c = 1
        // Criar o Laço para contar de 1 a 10
        for (c = 1; c <= 10; c++) {
            // Criar o Elemento option de forma dinâmica e Atribuir à variável item
            let item = document.createElement("option")
            // n (num trnasformado) x contador = resultado da multiplicação
            item.text = `${n} x ${c} = ${n * c}`
            // Para o JavaScript não faz tanto sentido, mas para outras Linguagens, PHP por exemplo, sim.
            // Precisa ser entre Crases. 
            // É o número de cada tab para cada uma das linhas selecionadas dentro da Lista
            item.value = `tab${c}`
            // Para mostrar a variável tab dentro do Elemento Filho variável item
            tab.appendChild(item)
        }

    }


}