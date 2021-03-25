'use strict'

class AuthController {
    static formLogin(req, res) {
        res.render('Login')
    }

    static postLogin(req, res) {
        req.session.isLogin = true
        res.redirect('/')
    }

    static logout(req, res) {
        req.session.destroy()
        res.render('Logout')
    }
}

module.exports = AuthController