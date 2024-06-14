import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const livros = controleLivro.obterLivros();
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    } else if (req.method === 'POST') {
        try {
            const livro = req.body;
            controleLivro.incluir(livro);
            res.status(200).json({ message: 'Livro adicionado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
};