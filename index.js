const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

const port = process.env.PORT || 5000;

const server = http.createServer(app);

app.listen(port, () => {console.log('server connected on port '+port+'..')})

const { mongoURI } = require('./config/keys');

mongoose.connect(mongoURI)
    .then(() => console.log('mongoDB connected..!'))
    .catch(() => console.log('error while connecting mongoDB!'));



