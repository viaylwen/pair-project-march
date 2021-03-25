const express = require('express')
const MenuController = require('../controllers/menuController')
const menuRouter = express.Router()

menuRouter.get('/', MenuController.findAll)

menuRouter.get('/edit/:id', MenuController.editForm)
menuRouter.post('/edit/:id', MenuController.editUpdate)

module.exports = menuRouter