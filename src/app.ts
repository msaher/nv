import path from 'path';
import fs from 'fs';
import express from "express";
import { getHtml } from "./pandoc"

// configure app
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

const basedir = "../";

app.get('/', (req, res) => {
    let files = fs.readdirSync('../')
    files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
    return res.render('root', {files: files});
});

app.get('/*', (req: any, res) => {
    const filename = path.normalize(path.join(basedir, req.params[0]));
    if(!fs.existsSync(filename))
        return res.render('404');

    if (fs.lstatSync(filename).isDirectory()) {
        let files = fs.readdirSync(filename)
        return res.render('directory', {dirpath: filename, basename: path.basename(filename), files: files});
    }

    let html = getHtml(filename);
    if (html)
        return res.render('note', {content: html, title: path.basename(filename)});
    else
        return res.sendFile(path.resolve(filename)); // uknown data is sent as it is

});

const port = 8000
app.listen(port, () => {
    console.log('Listening on port ' + port)
});

