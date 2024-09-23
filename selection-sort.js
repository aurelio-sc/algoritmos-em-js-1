//Lista a ser ordenada:
const livros = require('./lista');

//Essa função retorna o índice do objeto com o menor valor de preco.
//Ela recebe como parâmetros o array que queros ordenar e o índice a partir do qual buscaremos o menor elemento.
function menorValor(arrProdutos, posicaoInicial) {
    let menor = posicaoInicial;
  
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
      if (arrProdutos[atual].preco < arrProdutos[menor].preco) {
          menor = atual;
      }
    }
  
    return menor;
}

//Colocamos "-1" porque o último elemento não precisa ser testado, ele já estará no lugar certo depois de organizar todos os outros.
for (let atual = 0; atual < livros.length - 1; atual++) {
  //Contando a partir da posição atual, procuramos o índice do elemento de menor valor.
  let menor = menorValor(livros, atual);

  // Guardamos o elemento de menor valor e o elemento atual em variáveis auxiliares.
  let livroAtual = livros[atual];
  let livroMenor = livros[menor];

  //Trocamos de lugar o elemento de menor valor e o elemento atual.
  livros[atual] = livroMenor;
  livros[menor] = livroAtual;
}

console.log(livros);