const express = require('express');//pulling express
const app = express();//intialising express
const mongoose = require('mongoose');//pulling moongoose
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err) => {
    if(err)
    console.log('Could not connect to database',err);
    else{
        console.log();
        console.log('connected to database ' + config.db);
    }
});
app.use(express.static(__dirname + '/client/dist/'));

app.get('/',(req,res) => {
    res.sendFile(path.join(___dirname+ '/client/dist/inex.html'));
});

app.listen(8080,() => {
    console.log('listening on port 8080');
});