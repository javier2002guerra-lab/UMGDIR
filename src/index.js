const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('DevOps funcionando correctamente');
});

app.get('/saludo', (req, res) => {
  res.json({ mensaje: 'Esta api esta ejecutandose en CI' })
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

module.exports = app;
