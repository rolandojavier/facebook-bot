const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const verificationController = require('./controllers/verification')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.listen((process.env.PORT || 3000), () => console.log('Webhook server is listening...'));

app.get('/', verificationController);