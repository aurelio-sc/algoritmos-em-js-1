//Lista a ser ordenada:
const livros = require('./lista');

function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        //analise > 0: essa condição faz com que o primeiro item da lista não seja analisado.
        //O segundo item é comparado com o primeiro. Se for menor, troca de lugar com ele.
        //O terceiro item é comparado com o segundo. Se for menor, troca de lugar com ele. Em seguida é comparado com o primeiro, se for menor, troca de lugar com ele.
        //E assim por diante.
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];
            
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;

            analise--;
        }
    }

    console.log(lista);
}

insertionSort(livros);