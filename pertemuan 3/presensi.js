const express = require('express');
const router = express.Router();

//routing

router.get('/',(req, res)=>{
    res.send('Ini Halaman Get Presensi');
});

router.post('/inputpresensi',(req, res)=>{
    res.send('Ini Halaman input Presensi');
});

router.put('/editPresensi',(req, res)=>{
    res.send('Ini Halaman edit Presensi');
});

router.delete('/deletepresensi',(req, res)=>{
    res.send('Ini Halaman delete Presensi');
});

module.exports = router;