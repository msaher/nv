import path from 'path';
import fs from 'fs';
import pandoc from 'node-pandoc'
import express from "express";
import Response from "express";
import { getHtml } from "./pandoc"

// configure app
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

const basedir = "../";

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/*', (req: any, res) => {
    const filename = path.join(basedir, req.params[0]);
    if(fs.existsSync(filename)) {
        let html = getHtml(filename);
        res.render('note', {content: html});
    }
    else {
        res.render('404');
    }
});

const port = 8000
app.listen(port, () => {
    console.log('Listening on port ' + port)
});

