const {Menu} = require('../models')

class MenuController {
    static findAll(req, res) {
        Menu.findAll()
            .then(menus => {
                res.render('Menu', {menus})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addForm(req, res) {
        res.render('FormAddMenu')
    }

    static addCreate(req, res) {
        let newMenu = {
            category: req.body.category,
            name: req.body.name,
            day: req.body.day,
            rating: req.body.rating
        }
        console.log(newMenu)
        Menu.create(newMenu)
            .then(menus => {
                res.redirect('/menu')
            })
            .catch(err => {
                res.send(err)
                console.log(err)
            })
    }

    static editForm(req, res) {
        let id = +req.params.id
        Menu.findByPk(id)
            .then(menu => {
                res.render('FormEditMenu', {menu})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editUpdate(req, res) {
        let id = +req.params.id
        let newMenu = {
            category: req.body.category,
            name: req.body.name,
            day: req.body.day,
            rating: req.body.rating
        }
        Menu.update(newMenu, {where: {id}})
            .then(menu => {
                res.redirect('/menu')
            })
            .catch(err => {
                let message = []
                err.errors.forEach(el => {
                    message.push(el.message)
                });
                res.send(message[0])
            })
    }

    static deleteOne(req, res) {
        Menu.destroy({
            where: {id: req.params.id}
        })
        .then(menus => {
            res.redirect('/menu')
        })
        .catch(err => {
            res.send(err)
            console.log(err)
        })
    }
}

module.exports = MenuController