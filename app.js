require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

mongoose
	.connect('mongodb+srv://sharmarandrey:sharmarandrey@cluster0.zu7okjl.mongodb.net/movies_Ironhack', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(x => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
	})
	.catch(err => {
		console.error('Error connecting to mongo', err);
	});

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.set('views', path.join(__dirname, 'views')); // Указываем путь к папке с шаблонами
app.set('view engine', 'ejs'); // Используем EJS как движок шаблонов

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const index = require('./routes/index');
app.use('/', index);

const celebritiesRoutes = require('./routes/celebrities');
app.use('/celebrities', celebritiesRoutes);

module.exports = app;
