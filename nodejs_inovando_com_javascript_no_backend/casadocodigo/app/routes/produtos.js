module.exports = (app) => {

  var listarProdutos = function(request,response){
    console.log('listando...');
    var connection = app.infra.connectionFactory();
    var produtosBanco = new app.infra.ProdutoDAO(connection);

    produtosBanco.lista(function(err, resultados){
        console.log(err);
        response.format({
          html: ()=>{
            response.render('produtos/lista', {lista: resultados});
          },
          json: ()=>{
            response.json(resultados);
          }
        });
     });

    connection.end();
  }


  app.get('/produtos', listarProdutos);

  app.get('/produtos/form',function(resquest,response){
    response.render('produtos/form');
  });

  app.post('/produtos',function(request,response){
    var livro = request.body;
    console.log(livro);
    var connection = app.infra.connectionFactory();
    var produtoDAO = new app.infra.ProdutoDAO(connection);
    produtoDAO.salva(livro,function(erros,resultados){
      console.log(erros);
      response.redirect('/produtos');
    });

    connection.end();
  });


  app.get('/produtos/remove',function(request,response){
    console.log('listando...');
    var connection = app.infra.connectionFactory();
    var produtosBanco = app.infra.produtosBanco(connection);

    var produto = produtosBanco.carrega(id,callback);
    if (produto){
      produtosBanco.remove(produto,callback)
    }
    connection.end();
  });
}
