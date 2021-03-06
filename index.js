const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')
// const atendimento = require('./controllers/atendimento')

conexao.connect(erro => {
  if(erro) {
    console.log(erro)
  } else {
      console.log('conectado com sucesso')

      Tabelas.init(conexao)
      const app = customExpress()

      app.listen(3000, () => console.log('Servidor rodando na porta 3000')) //subir o app no servidor  
  }
})



/*----------------------------------OBS--------------------------------------------------------------------------------*/
// RESPONSABILIDADES: do index.js --> Subir o servidor no ar
//                    do customExpress.js --> configurar qualquer coisa que precise configurar dentro do nosso express e qualquer modificação que presisamos fazer no nosso express
//                    do atendimento.js --> controlar quais são as rotas e o que temos que fazer quando acessar cada uma dessas rotas 
/*---------------------------------------------------------------------------------------------------------------------*/