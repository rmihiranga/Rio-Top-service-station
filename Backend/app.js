require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const rtsIndex = require('./routes/index.router');
const passport = require('passport');

//const uri = "mongodb+srv://user-1:<ucscprj_3>@somiru-restaurant-cluster-pkdq6.mongodb.net/test?retryWrites=true"
var usercontroller = require('./controllers/user.controller');
var app = express();
 
// middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/', rtsIndex);
app.use(passport.initialize());
//app.use('/register', usercontroller);
//app.use('/authenticate', usercontroller);
 
// start server

app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));










