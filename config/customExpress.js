const express = require('express')
const consign = require('consign')

module.exports = () => {
   const app = express()
   
   consign() // para executar o consign que tem a função de agrupar todos os arquivos para funcionar dentro de app(foi instalado no terminal)
   .include('controllers')//para incluir tudo que esta na pasta controllers...
   .into(app)//incluir dentro de app

   return app
}


