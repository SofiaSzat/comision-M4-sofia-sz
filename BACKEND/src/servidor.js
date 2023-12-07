require('dotenv').config();

const express = require('express')
const server = express()


const PORT = 3000

server.get('/', (req, res) => {
  res.send('Hola Mundo!')
})

//probando status code

/* 
server.get('/ruta2', (req, res) => {
    const ruta = true;
    
    if (ruta){
      res.send('Segunda ruta aqui'); //por defecto el status 200
    } else {
      res.status(404).send('Status 404: No se encontro la ruta');
    }
  });
  */



server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
  console.log (process.env.DB_USER);
})

