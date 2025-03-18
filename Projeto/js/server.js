const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Conectar ao banco de dados SQLite
let db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco de dados SQLite.');
});

// Middleware para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Middleware para processar dados JSON
app.use(express.json());

// Endpoint para obter dados
app.get('/data', (req, res) => {
  const sql = 'SELECT * FROM tabela_exemplo';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

// Endpoint para adicionar dados
app.post('/data', (req, res) => {
  const { campo1, campo2 } = req.body;
  const sql = 'INSERT INTO tabela_exemplo (campo1, campo2) VALUES (?, ?)';
  db.run(sql, [campo1, campo2], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.json({ id: this.lastID });
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Fechar o banco de dados ao encerrar o servidor
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Fechado o banco de dados SQLite.');
    process.exit(0);
  });
});