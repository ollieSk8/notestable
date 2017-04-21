/**
 * Created by XD on 2017/4/21.
 */
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const path =require('path');
const app = express();
const port = 8000;
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: true}));
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    require('./app/routes/index')(app, database);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
})