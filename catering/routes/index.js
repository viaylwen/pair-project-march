const express = require('express')
const custRouter = require('./customerRouter')
const menuRouter = require('./menuRouter')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('Home')
})

router.use('/menu', menuRouter)

router.use('/customer', custRouter)

module.exports = router