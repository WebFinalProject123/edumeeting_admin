var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session")
const passport= require("./passport")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var classRouter = require('./routes/class');
var courseRouter = require('./routes/course');
var profileRouter = require('./routes/profile');
var studentRouter = require('./routes/student');
var authRouter= require('./routes/auth');
var adminRouter=require('./routes/admin');
var teacherRouter = require('./routes/teacher')
const loggedInGuard=require('./middlewares/loggedInGuard')
var flash = require('connect-flash');

var association= require('./models/asocciate');
var fileUpload=require('express-fileupload');


association();
var app = express();
app.use(fileUpload({useTempFiles: true}));


const hbs = require('hbs');
var paginate = require('handlebars-paginate');
 hbs.registerHelper('paginate', paginate);
 app.use(flash());
 
//this required before view engine setup
hbs.registerPartials(__dirname + '/views/partials');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({ secret: process.env.SECRET_SESSION }));
app.use(passport.initialize());
app.use(passport.session());


app.use(function(req,res,next){
  res.locals.admin=req.user;
  next()
})

app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/admins',loggedInGuard,adminRouter);
app.use('/classes',loggedInGuard, classRouter);
app.use('/courses',loggedInGuard, courseRouter);
app.use('/profile',loggedInGuard, profileRouter);
app.use('/students',loggedInGuard, studentRouter);
app.use('/teachers',loggedInGuard, teacherRouter);
app.use('/users',loggedInGuard, usersRouter);

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
