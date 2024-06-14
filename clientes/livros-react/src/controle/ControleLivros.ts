const baseURL = 'http://localhost:3030/livros';
import { Livro } from '../modelo/Livro';

interface LivroMongo {
    _id: string | null;
    titulo: string;
    resumo: string;
    autores: string[];
}

export class ControleLivros {

    async obterLivros(): Promise<Livro[]> {
        try {
            const response = await fetch(baseURL);
            const livrosMongo: LivroMongo[] = await response.json();
            const livros: Livro[] = livrosMongo.map((livroMongo: LivroMongo) => ({
                titulo: livroMongo.titulo,
                resumo: livroMongo.resumo,
                autores: livroMongo.autores
            }));
            return livros;
        } catch (error) {
            console.error('Erro ao obter livros:', error);
            throw error;
        }
    }

    async excluir(codigo: string): Promise<boolean> {
        try {
            const response = await fetch(`${baseURL}/${codigo}`, {
                method: 'DELETE'
            });
            return response.ok;
        } catch (error) {
            console.error('Erro ao excluir livro:', error);
            throw error;
        }
    }

    async incluir(livro: Livro): Promise<boolean> {
        try {
            const livroMongo: LivroMongo = {
                titulo: livro.titulo,
                resumo: livro.resumo,
                autores: livro.autores,
                _id: ''
            };
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(livroMongo)
            });
            return response.ok;
        } catch (error) {
            console.error('Erro ao incluir livro:', error);
            throw error;
        }
    }
}

