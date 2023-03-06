// VARIÁVEIS GLOBAIS
// Atribuir à Variável 'num' o Valor da Classe Id da Caixa Input Number 'input#fnum'
let num = document.querySelector('input#fnum')
// Atribuir à Variável 'flista' o Valor da Classe Id da Select 'select#flista'
let lista = document.querySelector("select#flista")
// Atribuir à Variável 'res' o Valor da Classe Id da Div 'div#res'
let res = document.querySelector("div#res")
// Criar o Vetor 'valores' vazio, que será utilizado para analisar os dados
let valores = []

// Criar a Função para verificar se o Número foi preenchido (se a Caixa de Input não está vazia)
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Criar a Função para verificar se o Número informado na Caixa de Input já existe na Lista
// Inserir um Número e a Lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// Criar a Function adicionar
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // Adicionar o Número da Caixa de Input validado no Vetor valores
        valores.push(Number(num.value))
        // Criar/Atribuir à variável item de forma dinâmica, o elemento option, criando uma Tag option
        let item = document.createElement('option')
        // O item vai ter o Valor text, entre Crases (String c/ possibilidade de Interpolação)
        item.text = `Valor ${num.value} adicionado`
        // Para adicionar na Lista
        lista.appendChild(item)
        // Para Limpar a Mensagem após a Lista ser Finalizada
        res.innerHTML = ""
    } else {
        // Mensagem de Alerta se o Número for Inválido ou se ele já existir na Lista
        window.alert("Valor Inválido ou já se encontra na Lista.")
    }
    // Para limpar a Caixa de Input depois de cada valor adicionado ou de cada mensagem de alerta
    num.value = ""
    // Para voltar com o pointer na caixa de input
    num.focus()
}


// Criar a Function finalizar
function finalizar() {
    // Verificar se o vetor valores está vazio
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar!")
    } else {
        // VARIÁVEIS A SEREM APRESENTADAS APÓS FINALIZAR A COLETA DE DADOS
        // Criar variável que mostrará a quantidade de números cadastrados
        let tot = valores.length
        // Criar e Testar qual é o maior e o menor valor cadastrado
        let maior = valores[0]
        let menor = valores[0]
        // Criar a variável que mostrará a Soma dos Números Cadastrados
        let soma = 0
        // Criar a variável que mostrará a Média dos Números Cadastrados
        let media = 0

        // Looping para a obtenção da Soma, mais Testes para determinar o Maior e Menor número cadastrado
        for (let pos in valores) {
            // Para acumular a soma dos números cadastrados
            soma += valores[pos]
            // Para obter o Maior e o Menor valor cadastrado
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores(pos)
        }
        // Calcular a Média
        media = soma / tot


        // MOSTRANDO OS RESULTADOS
        // Para esvaziar/zerar o valor de res
        res.innerHTML = ""
        // Para Mostrar quantos Números foram cadastrados (entre crases)
        if (tot > 1) {
            // Para Mostrar se mais de 1 Número foi cadastrado
            res.innerHTML += `<p>Ao todo, ${tot} números foram cadastrados.`
        } else {
            // Para Mostrar se somente 1 Número foi cadastrado
            res.innerHTML += `<p>Ao todo, ${tot} número foi cadastrado.`
        }
        // Para mostrar o Maior Valor Cadastrado
        res.innerHTML += `<p>${maior} foi o Maior número cadastrado.`
        // Para mostrar o Menor Valor Cadastrado
        res.innerHTML += `<p>${menor} foi o Menor número cadastrado.`
        // Para mostrar a Soma dos Valores Cadastrados
        res.innerHTML += `<p>${soma} é a Soma dos números cadastrados.`
        // Para mostrar a Média dos Valores Cadastrados
        res.innerHTML += `<p>${media} é a Média dos números cadastrados.`



    }
}

