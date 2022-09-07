class Calculo {
  constructor(nome_aluno, disciplina_aluno, nota1, nota2, media) {
    this.nome_aluno = nome_aluno;
    this.disciplina_aluno = disciplina_aluno;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.media = media;
  }

  nomeComMedia() {
    console.log(`O nome do aluno é: ${this.nome_aluno} e sua média é ${(this.nota1 + this.nota2) / 2}`);
  }

  nomeComNotas() {
    console.log(`O nome do aluno é ${this.nome_aluno} e suas notas são: ${this.nota1} e ${this.nota2}`);
  }

  mostraMedia() {
    console.log(`A média do aluno é ${(this.nota1 + this.nota2) / 2}`);
  }
}