let abrigos = []

function menu() {
    let menu = Number(prompt(`===== ABRIGOS TEMPORÁRIOS =====
                        1. Cadastrar abrigo
                        2. Listar abrigos
                        3. Procurar abrigo
                        4. Sair
                        Escolha uma opção:`))

    if (menu === 1) {
        cadastrarAbrigo()
    } else if (menu === 2) {
        listarAbrigos()
    } else if (menu === 3) {
        procurarAbrigo ()
    } else if (menu === 4) {
        return
    }

    menu ()
}

function cadastrarAbrigo() {
    let abrigo = {}
    abrigo.nome = prompt('qual o nome?')
    abrigo.endereco = prompt('qual o endereço?')
    abrigo.telefone = prompt('qual o telefone?')
    abrigo.capacidade = prompt('qual a capacidade máxima de lotação?')
    abrigo.cidade = prom
    pt('qual a cidade?')
    abrigos.push(abrigo)
}

function listarAbrigos() {
    console.log('--------------------')
    console.log('LISTAGEM DE ABRIGOS:')
    console.log('--------------------')
    console.log('CÓDIGO |    NOME    |     ENDEREÇO        |      TELEFONE     |  CAPACIDADE | CIDADE')
    for(let i = 0; i < abrigos.length; i++) {
        console.log(`   ${i+1}    |     ${abrigos[i].nome}      |    ${abrigos[i].endereco}      |          ${abrigos[i].telefone} |           ${abrigos[i].capacidade}   |       ${abrigos[i].cidade}`)

    }
}

function procurarAbrigo() {
let abrigotemporario = prompt(`'Qual cidade você está?'`)
    for (let i = 0; i < abrigos.length; i++) {
        if (abrigos[i].cidade === abrigotemporario)
        }

    menu()
}