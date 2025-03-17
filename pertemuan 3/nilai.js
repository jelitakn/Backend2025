const express = require('express');
const router = express.Router();

//routing

router.get('/',(req, res)=>{
    res.send('Ini Halaman Get Nilai');
});

router.post('/inputnilai',(req, res)=>{
    res.send('Ini Halaman input Nilai');
});

router.put('/editnilai',(req, res)=>{
    res.send('Ini Halaman edit Nilai');
});

router.delete('/deletenilai',(req, res)=>{
    res.send('Ini Halaman delete Nilai');
});

module.exports = router;