function ProdutoDAO(connection){
  this._connection = connection;
}

ProdutoDAO.prototype.lista = function(callback){
  this._connection.query('select * from livros',callback);
}

ProdutoDAO.prototype.salva = function(livro,callback){
  this._connection.query('INSERT INTO livros SET ?', livro, callback);
}

module.exports = function(){
  return ProdutoDAO;
}
