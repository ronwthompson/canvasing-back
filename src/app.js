const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const hostname = '127.0.0.1';
const port = 3001;
const jsonParser = bodyParser.json()

app.use(cors())

app.post('/saveNote', jsonParser, (req, res) => {
  const noteToSave = {
    name: req.body.name,
    email: req.body.email,
    notes: req.body.notes
  }

  // TODO: save to DB or locally for testing
  res.send(noteToSave)
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
