module.exports = (app) => {
  app.get('/produtos',function(request,response){
    console.log('listando...');
    var connection = app.infra.connectionFactory();
    var produtosBanco = new app.infra.ProdutoDAO(connection);

    produtosBanco.lista(function(err, resultados){
         response.render('produtos/lista', {lista: resultados});
     });

    connection.end();
  });


  app.get('/produtos/form',function(resquest,response){
    response.render('produtos/form');
  });

  app.get('/produtos/remove',function(request,response){
    console.log('listando...');
    var connection = app.infra.connectionFactory();
    var produtosBanco = app.infra.produtosBanco(connection);

    var produto = produtosBanco.carrega(id,callback);
    if (produto){
      produtosBanco.remove(produto,callback)
    }ot
    connection.end();
  });
}
