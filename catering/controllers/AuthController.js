'use strict'

class AuthController {
    static formLogin(req, res) {
        res.render('Login')
    }

    static postLogin(req, res) {
        req.session.isLogin = true
        res.redirect('/')
    }

    static formLoginAdmin(req, res) {
        res.render('loginAdmin')
    }

    static postLoginAdmin(req, res) {
        req.session.isLogin = true
        res.redirect('/menu')
    }

    static logout(req, res) {
        req.session.destroy()
        res.render('Logout')
    }
}

module.exports = AuthController