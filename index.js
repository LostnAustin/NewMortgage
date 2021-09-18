const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('src'));


app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});

});

app.listen(port, () => {
    console.log('Now listening on port ${port}');
});

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'src')));