var mysql = require('mysql');

function createDBConnection(){
  return  mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "casadocodigo_nodejs_test"
  });
}

module.exports = () =>{
  return createDBConnection;
}
