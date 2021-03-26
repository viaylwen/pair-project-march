const express = require('express')
const custRouter = require('./customerRouter')
const menuRouter = require('./menuRouter')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const MenuController = require('../controllers/menuController')
// const isLoginMiddleware = require('../middlewares/isLoginMiddleware')

router.get('/', MenuController.homePage)

router.get('/login', AuthController.formLogin)
router.post('/login', AuthController.postLogin)

router.get('/loginAdmin', AuthController.formLoginAdmin)
router.post('/loginAdmin', AuthController.postLoginAdmin)

router.get('/logout', AuthController.logout)

router.use('/menu', menuRouter)

router.use('/customer', custRouter)

module.exports = router