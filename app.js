var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var sass = require('node-sass');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(
//     sass.middleware({
//         src: __dirname + '/sass', 
//         dest: __dirname + '/public/stylesheets/scss',
//         debug: true,       
//     })
//  );

app.use(express.static(path.join(__dirname, 'public')));    
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;