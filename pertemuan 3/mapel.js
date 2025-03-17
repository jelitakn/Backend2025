const express = require('express');
const router = express.Router();

//routing

router.get('/',(req, res)=>{
    res.send('Ini Halaman Get Mapel');
});

router.post('/inputmapel',(req, res)=>{
    res.send('Ini Halaman input Mapel');
});

router.put('/editmapel',(req, res)=>{
    res.send('Ini Halaman edit Mapel');
});

router.delete('/deletemapel',(req, res)=>{
    res.send('Ini Halaman delete Mapel');
});

module.exports = router;