const express = require('express');
const router = express.Router();

//routing

router.get('/',(req, res)=>{
    res.send('Ini Halaman Get Siswa');
});

router.post('/inputsiswa',(req, res)=>{
    res.send('Ini Halaman input Siswa');
});

router.put('/editsiswa',(req, res)=>{
    res.send('Ini Halaman edit Siswa');
});

router.delete('/deletsiswa',(req, res)=>{
    res.send('Ini Halaman delete Siswa');
});

module.exports = router;