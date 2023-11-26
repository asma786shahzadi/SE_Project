var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();//to use .env file
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var addproductRouter = require('./routes/Admin/addproduct');
var viewproductRouter = require('./routes/Admin/viewproduct');
var deleteproductRouter = require('./routes/Admin/deleteproduct');
var updateproductRouter = require('./routes/Admin/updateproduct');
var addemployeeRouter = require('./routes/Admin/addemployee');
var viewemployeeRouter = require('./routes/Admin/viewemployee');
var deleteemployeeRouter = require('./routes/Admin/deleteemployee');
var updateemployeeRouter = require('./routes/Admin/updateemployee');
var employeestatusRouter = require('./routes/Admin/employeestatus');
var productstatusRouter = require('./routes/Admin/productstatus');
var addcartRouter = require('./routes/User/addcart');
var viewcartRouter = require('./routes/User/viewcart');
var deletecartRouter = require('./routes/User/deletecart');
var buyproductRouter = require('./routes/User/buyproduct');
var getproductRouter = require('./routes/User/getproduct');
var viewuserRouter = require('./routes/User/viewuser');
var boughtRouter = require('./routes/User/bought');
var authenticationRouter = require('./routes/auth');
var viewuserRouter = require('./routes/Admin/viewuser');
var supportRouter = require('./routes/User/support');
var viewsupportRouter = require('./routes/Admin/viewsupport');
var updatesupportRouter = require('./routes/Admin/updatesupport');
const e = require('express');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());//use cors to allow cross origin resource sharing
app.use((req, res, next) => {//allow cross origin requests
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/images', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
  next();
}, express.static(path.join(__dirname, 'images')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register' ,registerRouter);
app.use('/login' ,loginRouter);
app.use('/addproduct' ,addproductRouter);
app.use('/viewproduct' ,viewproductRouter);
app.use('/deleteproduct' ,deleteproductRouter);
app.use('/updateproduct' ,updateproductRouter);
app.use('/addemployee' ,addemployeeRouter);
app.use('/viewemployee' ,viewemployeeRouter);
app.use('/deleteemployee' ,deleteemployeeRouter);
app.use('/updateemployee',updateemployeeRouter);
app.use('/employeestatus',employeestatusRouter);
app.use('/productstatus',productstatusRouter);
app.use('/addcart',addcartRouter);
app.use('/viewcart',viewcartRouter);
app.use('/deletecart',deletecartRouter);
app.use('/buyproduct',buyproductRouter);
app.use('/getproduct',getproductRouter);
app.use('/viewuser',viewuserRouter);
app.use('/bought',boughtRouter);
app.use('/authentication',authenticationRouter);
app.use('/viewuser',viewuserRouter);
app.use('/support',supportRouter);
app.use('/viewsupport',viewsupportRouter);
app.use('/updatesupport',updatesupportRouter);
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
