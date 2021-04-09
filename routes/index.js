const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('JWT Authentication')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

//@desc ADDING New User
//@route POST /adduser
router.post('/adduser', actions.addNew)
//@desc Authenticate a User
//@route POST /authentiate
router.post('/authenticate', actions.authenticate)
//@desc GET Info on a User
//@route GET /adduser
router.get('/getinfo', actions.getinfo)

module.exports = router