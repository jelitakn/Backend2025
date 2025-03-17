const express = require('express');
const router = express.Router();

//routing

router.get('/',(req, res)=>{
    res.send('Ini Halaman Get User');
});

router.post('/inputuser',(req, res)=>{
    res.send('Ini Halaman input User');
});

router.put('/edituser',(req, res)=>{
    res.send('Ini Halaman edit User');
});

router.delete('/deleteuser',(req, res)=>{
    res.send('Ini Halaman delete User');
});

module.exports = router;