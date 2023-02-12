const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const hostname = '127.0.0.1';
const port = 3001;
const jsonParser = bodyParser.json()

const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "canvasing",
  password: "travelandEat01!",
  port: 5432,
})

app.use(cors())

app.post('/saveNote', jsonParser, (req, res) => {
  const noteToSave = {
    name: req.body.name,
    email: req.body.email,
    notes: req.body.notes
  }

  client.connect();

  client.query(`
    INSERT INTO notes_again (id, name, notes, email) 
    values (gen_random_uuid(), '${req.body.name}', '${req.body.notes}', '${req.body.email}')`);

  res.send(noteToSave)
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
