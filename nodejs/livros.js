class Livros {
  constructor(nome_livro, autor, editora, paginas) {
    this.nome_livro = nome_livro;
    this.autor = autor;
    this.editora = editora;
    this.paginas = paginas;
  }

  vendaTitulo() {
    console.log(`Titulo livro: ${this.nome_livro}\nNome autor: ${this.autor}`);
  }

  nome_editora() {
    console.log(`Nome da editora: ${this.editora}`);
  }
}

const dados = new Livros('Aprenda JS', 'Ailson Lima', 'Atlas');

dados.vendaTitulo();
dados.nome_editora();