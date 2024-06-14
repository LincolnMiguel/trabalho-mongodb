import { Livro } from './modelo/Livro';

export class ControleLivros {
    livros: Livro[] =
        [
            {
                codigo: 1,
                codEditora: 1,
                titulo: 'As pequenas chances',
                resumo: 'Romance sobre a experiência de uma mulher que torna a encontrar o médico que cuidou de seu pai na etapa final de um câncer. A conversa traz à tona as recordações sobre o declínio físico do doente e de seu impacto sobre a vida dos filhos, da esposa e dos netos.',
                autores: ['Natalia Timerman'],
            },
            {
                codigo: 2,
                codEditora: 2,
                titulo: 'Latim em pó',
                resumo: 'A história se passa em uma São Paulo contemporânea e segue as aventuras de Zeca, um professor de latim que tem um talento peculiar: ele consegue ver e interagir com as palavras em latim que estão impressas em jornais, livros e placas na cidade.',
                autores: ['Caetano W. Galindo'],
            },
            {
                codigo: 3,
                codEditora: 3,
                titulo: 'De uma a outra ilha',
                resumo: 'A obra aborda temas como o tempo, a memória, a passagem da vida e a busca por significado. Os poemas exploram a experiência humana através de imagens vívidas e linguagem poética, convidando o leitor a refletir sobre questões existenciais e emocionais.',
                autores: ['Ana Martins Marques'],
            },
        ];

    obterLivros(): Livro[] {
        return this.livros;
    }
    incluir(livro: Livro): void {
        const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(livro => livro.codigo)) + 1 : 1;
        livro.codigo = novoCodigo;
        this.livros.push(livro);
    }
    excluir(codigo: number) {
        this.livros.splice(this.livros.findIndex(livro => livro.codigo === codigo), 1);
    }
}

