const express = require('express')
const CustomerController = require('../controllers/customerController')
const custRouter = express.Router()

custRouter.get('/', CustomerController.findAll)

custRouter.get('/add', CustomerController.addForm)
custRouter.post('/add', CustomerController.addCreate)

custRouter.get('/delete/:id', CustomerController.deleteOne)

module.exports = custRouter