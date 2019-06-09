/*all database requests for users are managed in this file*/
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/user');

/*db connection string*/
const db = "mongodb+srv://Nishadi:123456781@@cluster0-7dpxi.mongodb.net/test?retryWrites=true";

/*to avoid mongoose warnings*/
mongoose.Promise = global.Promise;


/*connect to db*/
mongoose.connect(db, { useNewUrlParser: true }, function (err) {
    console.log("done")
    if (err) {
        console.error("Error " + err);
    }
});

router.get('/count',  function (req, res) {
    console.log("geting count");
    user.countDocuments(function (err, number) {
        if (err) {
            res.send("Error getting count");
        } else {
            res.json(number);
            res.send(number);
        }
    });
})
module.exports = router;
