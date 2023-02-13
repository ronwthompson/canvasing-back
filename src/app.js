const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const hostname = '127.0.0.1';
const port = 3001;
const jsonParser = bodyParser.json();

const { Client } = require("pg");
const credentials = { // be sure to edit this object with your credentials!
  user: "postgres",
  host: "localhost",
  database: "canvasing",
  password: "",
  port: 5432,
};

app.use(cors());

app.get('/healthCheck', jsonParser, (req, res) => {
  res.send('Everything is looking good!');
});

app.post('/saveNote', jsonParser, (req, res) => {
  const client = new Client(credentials);
  client.connect();

  client.query(`
    INSERT INTO notes_table (id, name, notes, email) 
    values (gen_random_uuid(), '${req.body.name}', '${req.body.notes}', '${req.body.email}')`)
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      throw err;
    })
    .then(() => {
      client.end();
    });
});

app.get('/viewNotes', jsonParser, (req, res) => {
  const client = new Client(credentials);
  client.connect();
  client.query(`SELECT * from notes_table`)
    .then(results => {
      res.send(results.rows);
    })
    .catch(err => {
      throw err;
    })
    .then(() => {
      client.end();
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
