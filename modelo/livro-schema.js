const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    titulo: String,
    resumo: String,
    codigo: Number
});

const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;