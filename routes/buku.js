const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index', {
        'page': 'buku',
        'title': 'Daftar Buku'
    })
})



module.exports = router