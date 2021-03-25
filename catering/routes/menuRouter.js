const express = require('express')
const MenuController = require('../controllers/menuController')
const menuRouter = express.Router()

menuRouter.get('/', MenuController.findAll)

menuRouter.get('/add', MenuController.addForm)
menuRouter.post('/add', MenuController.addCreate)

menuRouter.get('/edit/:id', MenuController.editForm)
menuRouter.post('/edit/:id', MenuController.editUpdate)

menuRouter.delete('/delete/:id', MenuController.deleteOne)

module.exports = menuRouter