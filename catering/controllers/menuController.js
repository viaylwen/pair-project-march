const {Menu} = require('../models')

class MenuController {
    static findAll(req, res) {
        Menu.findAll()
            .then(menus => {
                res.render('menu', {menus})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editForm(req, res) {
        let id = +req.params.id
        Menu.findByPk(id)
            .then(menu => {
                res.render('editFormMenu', {menu})
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
            rating: req.body.rating
        }
        Menu.update(newMenu, {where: {id}})
            .then(menu => {
                res.redirect('/menus')
            })
            .catch(err => {
                let message = []
                err.errors.forEach(el => {
                    message.push(el.message)
                });
                res.send(message[0])
            })
    }
}

module.exports = MenuController