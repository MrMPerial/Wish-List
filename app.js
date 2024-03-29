const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mongodb = require('./utils/mongodb.utils');
const routes = require('./routes/index');

// Initialize App
const app = express();

// const router_ref_for_below = require('./routes/path_to_file');

// View Engine ( EJS )
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// DB Connection
mongodb.createEventListeners();
mongodb.connect();

app.get('/', (req, res) => {
  res.render('main');
});

// app.use('/path_to_be_used', file_ref_from_above);

module.exports = app;
