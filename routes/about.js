const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index', {
        'title' : 'About',
        'page' : 'about'
    });
})

module.exports = router