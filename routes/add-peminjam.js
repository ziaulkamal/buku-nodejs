const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const methodOverride = require('method-override')
const { body, validationResult, check } = require('express-validator')
const bodyParser = require('body-parser')
const router = express.Router()


router.use(methodOverride('_method'))

const Peminjam = require('../models/peminjam')
const { findOne } = require('../models/peminjam')

router.use(cookieParser('secret'))

router.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
)
router.use(flash())

// router.get('/form', (req, res, next) => {
//     res.render('index', {
//         'page': 'add-peminjam',
//         'title': 'Tambah data'
//     })
// })

// router.post('/form', (req, res) => {

//     console.log(res.body);
//     res.send(req.body)
// })

router.get('/new', (req, res) => {
    res.render('index', {
      'page': 'add-peminjam',
      'title': 'Form Tambah Data'
    })
  })

  // router.post('./peminjam',[
  //   body('nama').custom( async (value) => {
  //   const duplikat = await Peminjam.findOne({ nama: value })
  //   if(duplikat) {
  //     throw new Error('Nama contact sudah terdaftar');
  //   }
  //   return true
  //   }),
  //   check('email', 'Email tidak valid!').isEmail(),
  //   check('nohp', 'No hp tidak valid!').isMobilePhone('id-ID')
  
  // ],  
  // (req, res, next) => {
  //     const errors = validationResult(req)
  //     if (!errors.isEmpty()) {
  //       res.render('index', {
  //         'page': 'add-peminjam',
  //         'title': 'Form tambah data',
  //         errors: errors.array(),
  
  //       })
  //     } else {
  //       Peminjam.insertMany(req.body, (error, result) => {
  //         // flash message
  //         req.flash('msg', 'Data contact berhasil ditambahkan!')
  //         res.redirect('./peminjam')
  //       })
  //     }
  //   })

  router.post('/new',(req,res) => {
    console.log(req.body);
    res.json(req.body)
  })
  



module.exports = router