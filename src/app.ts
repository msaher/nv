import express, { Express } from "express"
const app = express();

app.get('/', (req, res) => {
    res.send('hi');
});

const port = 8000
app.listen(port, () => {
    console.log('Listening on port ' + port)
});
