/*
1. Adicione uma nova feature: Avaliações.
a. Um usuário poderá criar uma avaliação sob um produto
específico.
b. Um produto pode receber N avaliações.
c. A avaliação consiste em uma nota de 0 a 5.
d. Ao mostrar um produto, além dos comentários deve ser
mostrada a média de avaliações.
*/

class Avaliacao {
    nota: number;
    comentario: string;

    constructor(nota: number, comentario: string) {
        this.nota = nota;
        this.comentario = comentario;
    }
}

class Produto {
    nome: string;
    avaliacoes: Avaliacao[];

    constructor(nome: string) {
        this.nome = nome;
        this.avaliacoes = [];
    }

    adicionarAvaliacao(nota: number, comentario: string) {
        const avaliacao = new Avaliacao(nota, comentario);
        this.avaliacoes.push(avaliacao);
    }

    calcularMediaAvaliacoes(): number {
        if (this.avaliacoes.length === 0) return 0;

        let soma = 0;

        // loop vai percorrer todos os elementos do array e vai adicionar a nota (this.avaliacoes[i].nota) à soma
        for (let i = 0; i < this.avaliacoes.length; i++) {
            soma += this.avaliacoes[i].nota;
        }
    
        return soma / this.avaliacoes.length;
    }

    mostrarAvaliacoes() {
        console.log(`*PRODUTO: ${this.nome}*`);
        console.log(`Média de Avaliações: ${this.calcularMediaAvaliacoes().toFixed(2)}`);

        // repete os atributos de avaliação de cada avaliação
        this.avaliacoes.forEach((avaliacao, index) => {
            console.log(`--Avaliação ${index + 1}--`); // isso mostra o número da avaliação (primeira, segunda, terceira)
            console.log(`Nota: ${avaliacao.nota}`);
            console.log(`Comentário: ${avaliacao.comentario}`);
        });
    }
}

const produto1 = new Produto("Produto A");

// (nota, comentário)
produto1.adicionarAvaliacao(5, "Excelente produto!");
produto1.adicionarAvaliacao(4, "Muito bom, mas poderia ser melhor.");
produto1.adicionarAvaliacao(3, "Produto mediano.");

// só exibe as avaliações do produto 1. se tivessem outros produtos, precisaria chamar o const desse outro produto separadamente com o .mostrarAvaliacoes()
produto1.mostrarAvaliacoes();

console.log("-------- Apenas a média ----------")

const media = produto1.calcularMediaAvaliacoes();
console.log(`Média de Avaliações: ${media.toFixed(2)}`);