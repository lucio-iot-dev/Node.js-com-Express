const mysql = require('mysql')


const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'agenda-pet'
})

module.exports = conexao

//Caso necessita alterar a senha de acesso do mysql:
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// flush privileges;
// Comando tem que ser digitado dentro do mysql ( sudo mysql -u root -p ,   depois digita a senha caso não entre digite root)
