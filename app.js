var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var customerRouter = require('./routes/customer');
var productRouter = require('./routes/product');
var userRouter = require('./routes/user');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://192.168.99.100:27017/local');
// console.log(mongoose.connection.readyState);
// setInterval(function() {
//   console.log(mongoose.connection.readyState);
// }, 3000);

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});

// --- api routes ---
app.use('/customer',customerRouter);
app.use('/product',productRouter);
app.use('/user',userRouter);

// --- abort ---
app.use((req,res,next)=>{
    var error = new Error('Page Not Found');
    error.status = 404;
    next(error);
});
app.use((error,req,res,next)=>{
    var status = error.status || 500;
    res.status(status);
    res.json(
        {
            status: status,
            message: error.message
        }
    )
});

// app.use('/*',(req,res)=>{
//     res.json(
//         {
//             message:'page not found'
//         }
//     );
// });

module.exports = app;