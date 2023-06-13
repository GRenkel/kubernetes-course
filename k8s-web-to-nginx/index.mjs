import express from 'express'
import fetch from 'node-fetch'
import os from 'os'

const app = express()
const PORT = 1111

app.get("/", (req, res) => {
  const helloMessage = `Hello from the ${os.hostname()}`
  console.log(helloMessage)
  res.send(helloMessage)
})

app.get("/nginx", async (req, res) => {
  const url = 'http://nginx' //name of the service which is static :)
  const response = await fetch(url);
  const body = await response.text();
  res.send(body)
})

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})