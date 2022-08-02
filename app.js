const express = require('express')
const app = express()
const PORT = process.env.PORT||80;
const HOSTNAME="0.0.0.0";
const ip =require('ip');
console.log(ip.address())
app.get('/', (req, res) => {
  res.send(`<h1>Hello ${ip.address()}</h1>`)
})
app.listen(PORT,HOSTNAME,() => {
  console.log(` app listening on port ${HOSTNAME} ${PORT}`)
})

