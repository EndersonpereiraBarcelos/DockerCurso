const express = require('express')
const app = express()
const port = 3000
const router = express.Router();

app.get('/', (req, res) => {
  res.send('Olá Docker! Atualização!')
});



app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`)
})