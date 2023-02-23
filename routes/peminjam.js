const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const methodOverride = require('method-override')
const { body, validationResult, check } = require('express-validator')

// router.use(bodyParser.json())
const router = express.Router()

router.get('/', (req, res, next) => {

    // const peminjam = await Peminjam.find()

    res.render('index', {
        'page': 'peminjam',
        'title': 'Daftar Peminjam',
        // msg: req.flash('msg')
    })
})



module.exports = router