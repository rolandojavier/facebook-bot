const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.listen((process.env.PORT || 3000), () => console.log('Webhook server is listening...'));

// Server index page
app.get('/', function (req, res) {
    res.send('Deployed!');
});