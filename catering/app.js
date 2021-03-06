const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')
const session = require('express-session')


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))

app.use(session({
  secret: 'admin',
  resave: false,
  saveUninitialized: true,
}))

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})