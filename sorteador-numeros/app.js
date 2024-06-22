let listaNumerosSorteados = []
function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value)
    let de = parseInt(document.getElementById("de").value)
    let ate = parseInt(document.getElementById("ate").value)
    
    for(let i = 0; i < quantidade; i++){
        let numerosSorteados = numeroAleatorio(de, ate)
        while(listaNumerosSorteados.includes(numerosSorteados)){
            numerosSorteados = numeroAleatorio(de, ate)
        }
        listaNumerosSorteados.push(numerosSorteados)
    }
    let exibirResultado = document.getElementById("resultado")
    exibirResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaNumerosSorteados}</label>`
}

function numeroAleatorio(de, ate){
    return parseInt((Math.random() * (ate - de) + de))
}