const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.sendFile("/home/spiralling/web/views/hellen.html")
})

app.get('/hellen', (req, res) => {
  res.redirect('/false/hellen')
})

app.get('/false/hellen', (req, res) => {
  res.sendFile("/home/spiralling/web/views/hellen.html")
})

app.get('/true/hellen', (req, res) => {
  res.sendFile("/home/spiralling/web/views/hellen.txt")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

