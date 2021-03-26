const express = require('express')
const MenuController = require('../controllers/menuController')
const menuRouter = express.Router()
const isLoginMiddleware = require('../middlewares/isLoginMiddleware')

menuRouter.get('/', isLoginMiddleware, MenuController.findAll)

menuRouter.get('/add', isLoginMiddleware, MenuController.addForm)
menuRouter.post('/add', isLoginMiddleware, MenuController.addCreate)

menuRouter.get('/edit/:id', isLoginMiddleware, MenuController.editForm)
menuRouter.post('/edit/:id', isLoginMiddleware, MenuController.editUpdate)

menuRouter.get('/delete/:id', isLoginMiddleware, MenuController.deleteOne)

module.exports = menuRouter