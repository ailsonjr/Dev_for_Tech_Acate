class Livro {
  constructor(nome_livro, qtdLivro, valorUnitario) {
    this.nome_livro = nome_livro;
    this.qtdLivro = qtdLivro;
    this.valorUnitario = valorUnitario;
  }

  dadosLivro() {
    console.log(`Titulo livro: ${this.nome_livro}\nQuantidade em estoque: ${this.qtdLivro}\nValor unitário: R$${this.valorUnitario}\nValor total: R$${this.qtdLivro * this.valorUnitario}`);
  }
}

module.exports = Livro;
