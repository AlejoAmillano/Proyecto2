var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes/register');
var flash = require('connect-flash');
var session = require('express-session');
var indexRouter = require('./routes/index');
var detailRouter = require('./routes/detalle');
var resultRouter = require('./routes/resultados');
var genreRouter = require('./routes/generos');
var advancedRouter = require('./routes/buscadoravanzado');
var advancedsearchRouter = require('./routes/resultadosavanzado');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(flash());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ cookie: { maxAge: 60000 }, 
  secret: 'secret',
  resave: false, 
  saveUninitialized: false}));

app.use('/', indexRouter);
app.use('/series/detalle', detailRouter);
app.use('/resultados', resultRouter);
app.use('/genero', genreRouter);
app.use('/avanzado/', advancedRouter);
app.use('/avanzado/search', advancedsearchRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
