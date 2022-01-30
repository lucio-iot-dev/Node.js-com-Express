const express = require('express')

const app = express()

app.listen(3000, () => console.log('Servidor rodando na porta 3000')) //subir o app no servidor

app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos'))
