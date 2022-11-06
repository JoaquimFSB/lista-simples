var listaItens = []

var stringLista = ""

function adicionar() {
    
    var item = document.getElementById("textItem").value

    listaItens.push(item)
    
    var stringLista = listaItens.join([separador = '<br>'])

    document.getElementById("lista").innerHTML = stringLista
    item = document.getElementById("textItem").value=""

}

function pesquisar() {
    let buscaPor = document.getElementById("pesquisa").value
    let indice = listaItens.indexOf(buscaPor)

    document.getElementById('ResultadoPesquisa').innerHTML = (`${buscaPor} esta na linha ${indice+1}`) 
}

function ordernar() {
    listaItens.sort()

    var stringLista = listaItens.join([separador = '<br>'])

    document.getElementById("lista").innerHTML = stringLista
}

function remover() {
    let buscaPor = document.getElementById("remover").value
    let indice = listaItens.indexOf(buscaPor)
    console.log(buscaPor)
    
    while (indice >= 0) {
        listaItens.splice(indice,1)
        indice = listaItens.indexOf(buscaPor)
    }

    var stringLista = listaItens.join([separador = '<br>'])

    document.getElementById("lista").innerHTML = stringLista
    buscaPor = document.getElementById("remover").value = ""
    
    console.log(buscaPor)
}
