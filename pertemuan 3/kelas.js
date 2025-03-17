const express = require('express');
const router = express.Router();

//routing

router.get('/',(req, res)=>{
    res.send('Ini Halaman Get Kelas');
});

router.post('/inputkelas',(req, res)=>{
    res.send('Ini Halaman input Kelas');
});

router.put('/editkelas',(req, res)=>{
    res.send('Ini Halaman edit Kelas');
});

router.delete('/deletekelas',(req, res)=>{
    res.send('Ini Halaman delete Kelas');
});

module.exports = router;