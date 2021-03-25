const express = require('express')
const CustomerController = require('../controllers/customerController')
const custRouter = express.Router()

custRouter.get('/', CustomerController.findAll)

custRouter.get('/add', CustomerController.addForm)
custRouter.post('/add', CustomerController.addCreate)

custRouter.get('/edit/:id', CustomerController.editForm)
custRouter.post('/edit/:id', CustomerController.editUpdate)

custRouter.get('/delete/:id', CustomerController.deleteOne)

custRouter.get('/:id/add-menu', CustomerController.addMenu)
custRouter.post('/:id/add-menu', CustomerController.postMenu)

custRouter.get('/:id/myorder', CustomerController.menuOrder)

module.exports = custRouter