const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/logowanie',(req,res)=>{
    res.render('logowanie')
})

module.exports = router;