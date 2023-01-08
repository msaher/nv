import express from "express"
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index');
});

const port = 8000
app.listen(port, () => {
    console.log('Listening on port ' + port)
});
