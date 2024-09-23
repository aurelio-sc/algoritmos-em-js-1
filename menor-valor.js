//encontrar o menor valor:

const livros = require('./lista');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual;
    }
}

//utilizando for...of para encontrar o menor valor:

console.log(`${livros[maisBarato].preco} é preço e ${livros[maisBarato].titulo} é o título do livro mais barato.`);

let livroMaisBarato = livros[0];

for (const livro of livros) {
  if (livro.preco < livroMaisBarato.preco) {
    livroMaisBarato = livro;
  }
}

console.log(`${livroMaisBarato.preco} é o preço e ${livroMaisBarato.titulo} é o título do livro mais barato.`);