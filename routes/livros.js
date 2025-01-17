const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter os livros.' });
    }
});

router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        await incluir(livro);
        res.json({ message: 'Livro incluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao incluir o livro.' });
    }
});

router.delete('/:codigo', async (req, res) => {
    try {
        const codigo = req.params.codigo;
        await excluir(codigo);
        res.json({ message: 'Livro excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir o livro.' });
    }
});

module.exports = router;