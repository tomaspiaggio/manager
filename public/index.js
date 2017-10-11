let express = require('express')
let app = express()
let path = require('path')
const PORT = 3000;
// asco
const imports = ['/scripts/script.js',
                 '/styles/styles.css'];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
});

app.get('/selection/init', (req, res) => {
    res.status(200).send('ok')
    console.log('Selection Init')
});

app.get('/selection/stop', (req, res) => {
    res.status(200).send('ok')
    console.log('Selection Stop')
});

app.get('/status/play', (req, res) => {
    res.status(200).send('ok')
    console.log('Status Play')
});

app.get('/status/stop', (req, res) => {
    res.status(200).send('ok')
    console.log('Status Stop')
});

app.get('/status/origin', (req, res) => {
    res.status(200).send('ok')
    console.log('Origin Setted')
});


// Static Files
imports.map(path => {
    app.get(path, (req, res) => {
        res.sendFile(__dirname + path);
    });
});

console.log('Listening on port: ' + PORT)
app.listen(PORT)
