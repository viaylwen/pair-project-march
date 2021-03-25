const {Customer, Menu, MenuOrder} = require('../models')

class CustomerController {
    static findAll(req, res) {
        Customer.findAll()
        .then(customers => {
            res.render('Customer', {customers})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addForm(req, res) {
        res.render('FormAddCustomer')
    }

    static addCreate(req, res) {
        let newCust = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        }

        Customer.create(newCust)
            .then(customers => {
                sendMail(customers.email)
                let msg = 'Thank you for registering!'
                res.redirect(`/?msg=${msg}`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editForm(req, res) {
        let id = +req.params.id
        Customer.findByPk(id)
            .then(customer => {
                res.render('FormEditCustomer', {customer})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editUpdate(req, res) {
        let id = +req.params.id
        let newCust = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }
        Customer.update(newCust, {where: {id}})
            .then(customer => {
                res.redirect('/customer')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteOne(req, res) {
        Customer.destroy({
            where: {id: req.params.id}
        })
        .then(customers => {
            res.redirect('/customer')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addMenu(req, res) {
        let dataCust = ''
        let dataMenu = ''

        Customer.findOne({
            where: { id : +req.params.id }
        })
            .then(customer => {
                dataCust = customer
                return Menu.findAll()
            })
            .then(menu => {
                dataMenu = menu
                return MenuOrder.findAll({
                    include: [
                        { model: Menu }
                    ],
                    where: { CustomerId: +req.params.id}
                })
            })
            .then(data => {
                res.render('CustomerFormAddMenu', {dataCust, dataMenu, data})
            })
            .catch(err => {
                res.send(err)
                console.log(err)
            })
    }

    static postMenu(req, res) {
        let newMenuOrder = {
            CustomerId: req.params.id,
            MenuId: req.body.MenuId
        }
        MenuOrder.create(newMenuOrder)
            .then(menuOrder => {
                res.redirect(`/customer/${req.params.id}/myorder`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static menuOrder(req, res) {
        let id = +req.params.id
        Customer.findOne({
            include: Menu,
            where: {id}
        })
        .then(customer => {
            res.render('CustomerMenuOrder', {customer})
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = CustomerController