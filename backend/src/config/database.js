const mongoose = require('mongoose') // faz o mapeamento dos obj js para documentos no mongo, também faz a conexão com mongo.
mongoose.Promise = global.Promise // Faz a API de promise do mongoose utilizar a API de promise do node
module.exports = mongoose.connect('mongodb://localhost/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
