const express = require('express');
const app = express();

app.get('/tests',(req,res) => {
    res.json('test ok');
});

app.listen(4000);