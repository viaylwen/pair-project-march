const {Customer} = require('../models')

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
                res.redirect('/customer')
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
}

module.exports = CustomerController