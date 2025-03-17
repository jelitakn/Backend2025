const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Ini get data!");
});

app.post("/", (req, res) => {
    res.send("Ini post data!");
});

app.put("/", (req, res) => {
    res.send("Ini untuk edit data!");
});

app.delete("/", (req, res) => {
    res.send("Ini delete data!");
});

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`);
});