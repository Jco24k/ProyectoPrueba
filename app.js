const json = require('express');
const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.set('view engine','ejs');
app.use('/',require('./routes/router'));


app.listen(9002, ()=>{
    console.log('El servidor tiene habilita el puerto: http://localhost:9002');
});