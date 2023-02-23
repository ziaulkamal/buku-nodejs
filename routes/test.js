const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        'page': 'add-peminjam',
        'title': 'Tambah data'
    })
});

router.post('/', (req,res) =>{
    const data = req.body

    console.log(res.data);
})