import path from 'path';
import fs from 'fs';
import pandoc from 'node-pandoc'
import express from "express";
import Response from "express";


const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

const basedir = "../";

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/*', (req, res) => {
    console.log(req.params)
    // const basename = req.params;
    // const filename = path.join(basedir, basename);
    // console.log(filename);
    res.render('index');
});

const port = 8000
app.listen(port, () => {
    console.log('Listening on port ' + port)
});
