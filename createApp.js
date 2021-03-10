const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const clients = require('./clients.json')

const app = express()
const staticPath = path.join(__dirname, './build')
app.use(bodyParser.json())
app.use(express.static(staticPath))

app.get('/clients', (req, res) => {
  res.json(clients)
})

module.exports = app
