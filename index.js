const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/To_doDB'
const app =express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(url, {useNewUrlParser:true},{useUnifiedTopology: true})

const con = mongoose.connection

con.on('open', () => {
    console.log('Connected to the database')
})



app.set('port', process.env.PORT || 3000);
const to_dorouter = require('./routes/To-do')
app.use('/To-do',to_dorouter)



app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs")
app.listen(app.get('port'), () => {
    console.log('Server is Running......' + app.get('port'))
});