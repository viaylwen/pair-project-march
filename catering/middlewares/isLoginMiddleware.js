const isLoginMiddleware = (req, res, next) => {
    if (req.session.isLogin == true) {
        next()
    } else {
        res.redirect("/login")
    }
}

module.exports = isLoginMiddleware