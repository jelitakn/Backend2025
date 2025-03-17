const express = require ('express');
const app = express();
const port = 3000;
const user = require('./user');
const mapel = require('./mapel');
const guru = require('./guru');
const siswa = require('./siswa');
const kelas = require('./kelas');
const jadwal = require('./jadwal');
const nilai = require('./nilai');
const presensi = require('./presensi');

//menggunakan modul
app.use('/user', user);
app.use('/mapel', mapel);
app.use('/guru', guru);
app.use('/siswa', siswa);
app.use('/kelas', kelas);
app.use('/jadwal', jadwal);
app.use('/nilai', nilai);
app.use('/presensi', presensi);

//routing

app.get("/",(req, res) => {
    res.send("Ambil data");
});

app.post("/",(req, res) => {
    res.send("Kirim data");
});

app.put("/",(req, res) => {
    res.send("Edit data");
});

app.patch("/",(req, res) => {
    res.send("Edit data");
});

app.delete("/",(req, res) => {
    res.send("Hapus data");
});

app.listen(port,()=>{
    console.log('Aplikasi berjalan pada : ${port}');
});