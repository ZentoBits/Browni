'use strict'

////// Requires //////
const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

const routes = require('./routes/')
const { connect } = require('./database')

const app = express()

////// Port preference //////
const PORT = process.env.PORT || 3000
app.set('PORT', PORT)

////// Middleware //////
app.use(express.static('client'))
app.use(bodyParser.urlencoded({extended: false}))

app.use(routes)

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on PORT number ${PORT}`)
  })
})
.catch(console.error)
