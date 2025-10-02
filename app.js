const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.get('/hellen', (req, res) => {
  res.redirect('/false/hellen')
})

app.get('/false/hellen', (req, res) => {
  res.sendFile(__dirname + "/views/hellen.html")
})

app.get('/true/hellen', (req, res) => {
  res.sendFile(__dirname + "/views/hellen.txt")
})

app.get('/burning', (req, res) => {
  res.redirect('https://classics.mit.edu/Aeschylus/agamemnon.html')
})

app.get('/yeats-aeschylus-teasdale', (req, res) => {
  res.sendFile(__dirname + "/views/final.txt")
})

app.get('/yeats-teasdale-aeschylus', (req, res) => {
  res.sendFile(__dirname + "/views/final.txt")
})

app.get('/teasdale-yeats-aeschylus', (req, res) => {
  res.sendFile(__dirname + "/views/final.txt")
})

app.get('/teasdale-aeschylus-yeats', (req, res) => {
  res.sendFile(__dirname + "/views/final.txt")
})

app.get('/aeschylus-yeats-teasdale', (req, res) => {
  res.sendFile(__dirname + "/views/final.txt")
})

app.get('/aeschylus-teasdale-yeats', (req, res) => {
  res.sendFile(__dirname + "/views/final.txt")
})

app.get('/poet-poet-poet', (req, res) => {
  res.sendFile(__dirname + "/views/poet-miss.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

