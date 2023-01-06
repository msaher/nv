const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('hi');
});

const port = 8000
app.listen(port, (err) => {
    if (err)
        console.log(err);
    console.log('Listening on port ' + port)
});
