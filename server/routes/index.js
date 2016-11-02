'use strict'

////// General Reqiures //////
const { Router } = require('express')
const router = Router()

////// Schema Links //////
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
      console.log('session.user', req.session.user._id)
      console.log('child', child);
        User
          .findByIdAndUpdate( req.session.user._id, {$push: {children: child}}, {new: true}, (err, user) => {
            console.log("user" ,user)
            res.status(200).json(req.session.user)
          })
    })
    .catch(err)
})

////// Validates user and logs them in //////
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

////// Retrieves user object (for use in front end) //////
router.get('/api/user', (req, res, err) => {
  User
    .findById( req.session.user._id )
    .then( user => {
      res.status(200).json(user)
    })
})

router.get('/api/children', (req, res, err) => {
  Children
    .findById( req.session.children._id )
    then( children => {
      res.status(200).json(children)
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
