const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const methodOverride = require('method-override')
// const bodyParser = require('body-parser')
const { body, validationResult, check } = require('express-validator')


const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', 'views');

// call router
const pageRouter = require('./routes/pages')
const aboutRouter = require('./routes/about')
const bukuRouter = require('./routes/buku')
const peminjamRouter = require('./routes/peminjam')
const addPeminjamRouter = require('./routes/add-peminjam')
// const testRouter = require('./routes/test')



// use routes
app.use('/', pageRouter)
app.use('/about', aboutRouter)
app.use('/buku', bukuRouter)
app.use('/peminjam', peminjamRouter)
app.use('/add-peminjam', addPeminjamRouter)
// app.use('/test', testRouter)


app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))

// call models
const Peminjam = require('./models/peminjam')
const { findOne } = require('./models/peminjam')


app.use(methodOverride('_method'))

// middleware basePath
app.use((req, res, next) => {
    res.locals.basePath = '/'
    next()
  })

  // Konfigurasi Flash
app.use(cookieParser('secret'))
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
)
app.use(flash())



module.exports = app

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

