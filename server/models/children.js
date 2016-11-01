'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Children', {
  "name" : {
    type: String,
    required: true
  },
  "username" : {
    type: String,
    required: true,
    index: { unique: true }
  },
  "password" : {
    type: String,
    required: true
  },
  "household" : { type: String }
})
