'use strict'

const { Router } = require('express')
const router = Router()

const User = require('../models/user')
const Children = require('../models/children')

router.post('/api/register', (req, res, err) => {
  console.log('req.body', req.body)
  User
    .create( req.body )
    .catch(err)
})

router.post('/api/registerChild', (req, res, err) => {
  console.log('req.body', req.body)
  Children
    .create( req.body )
    .then( child => {
      req.session.child = child
      res.status(200).json(req.session.child)
    })
    .catch(err)
})


router.post('/api/', (req, res, err) => {
  const email = req.body.email
  const password = req.body.password
  User
    .findOne({ email })
    .then( user => {
      if(user && user.password === password) {
        req.session.user = user
        console.log(`${user} is logged in`)
        res.status(200).json(req.session.user)
      } else {
        res.status(400).json(err)
      }
    })
    .catch(err)
})

router.get('/api/user', (req, res, err) => {
  User
    .findById( req.session.user._id )
    .then( user => {
      res.status(200).json(user)
    })
})

// router.post('/', ({ session, body: { email, password } }, res, err) => {
//   User.findOne({ email })
//     .then(user => {
//       if(User && user.password === password) {
//         console.log("logged in", user);
//         res.redirect('/')
//       }
//     })
// })

module.exports = router
