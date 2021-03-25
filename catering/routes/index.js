const express = require('express')
const custRouter = require('./customerRouter')
const menuRouter = require('./menuRouter')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
// const isLoginMiddleware = require('../middlewares/isLoginMiddleware')

router.get('/', (req, res) => {
    res.render('Home')
})

router.get('/login', AuthController.formLogin)
router.post('/login', AuthController.postLogin)

router.get('/logout', AuthController.logout)

router.use('/menu', menuRouter)

router.use('/customer', custRouter)

module.exports = router