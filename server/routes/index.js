'use strict'

const { Router } = require('express')
const router = Router()

const user = require('../models/user')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
