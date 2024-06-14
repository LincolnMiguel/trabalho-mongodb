const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/livraria')
    .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose;