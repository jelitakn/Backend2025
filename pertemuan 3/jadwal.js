const express = require('express');
const router = express.Router();

//routing

router.get('/',(req, res)=>{
    res.send('Ini Halaman Get Jadwal');
});

router.post('/inputjadwal',(req, res)=>{
    res.send('Ini Halaman input Jadwal');
});

router.put('/editjadwal',(req, res)=>{
    res.send('Ini Halaman edit Jadwal');
});

router.delete('/deletejadwal',(req, res)=>{
    res.send('Ini Halaman delete Jadwal');
});

module.exports = router;