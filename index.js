require('dotenv').config()
require('./src/db/server')

const express = require('express')
const app = express()

const port = 8000
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
