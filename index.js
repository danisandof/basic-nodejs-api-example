const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const articles = require('./db/articles.json');

var app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));

app.get('/', cors(), function(req, res) {
    res.render('index.ejs');
});

app.get('/articles', cors(), function(req, res) {
    res.json(articles);
});

app.listen(3000, (err) => {
        !err ? console.log("Server running at port: 3000") : console.log("Port not running " + err);
});
