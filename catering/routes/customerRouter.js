const express = require('express')
const CustomerController = require('../controllers/customerController')
const custRouter = express.Router()
const isLoginMiddleware = require('../middlewares/isLoginMiddleware')

custRouter.get('/', isLoginMiddleware, CustomerController.findAll)

custRouter.get('/add', CustomerController.addForm)
custRouter.post('/add', CustomerController.addCreate)

custRouter.get('/edit/:id', isLoginMiddleware, CustomerController.editForm)
custRouter.post('/edit/:id', isLoginMiddleware, CustomerController.editUpdate)

custRouter.get('/delete/:id', isLoginMiddleware, CustomerController.deleteOne)

custRouter.get('/:id/add-menu', isLoginMiddleware, CustomerController.addMenu)
custRouter.post('/:id/add-menu', isLoginMiddleware, CustomerController.postMenu)

custRouter.get('/:id/myorder', isLoginMiddleware, CustomerController.menuOrder)

module.exports = custRouter