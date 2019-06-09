/*all database requests are managed in this file*/
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

/*models*/
const post = require('../models/user');

// Defined store route
userRoutes.route('/add').post(function (req, res) {
    let user = new User(req.body);
    user.save()
      .then(user => {
        res.status(200).json({'user': 'user in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
  
  // Defined get data(index or listing) route
  userRoutes.route('/').get(function (req, res) {
      User.find(function (err, users){
      if(err){
        console.log(err);
      }
      else {
        res.json(users);
      }
    });
  });
  
  // Defined edit route
  userRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user){
        res.json(user);
    });
  });
  
  //  Defined update route
  userRoutes.route('/update/:id').post(function (req, res) {
      User.findById(req.params.id, function(err, next, user) {
      if (!user)
        return next(new Error('Could not load Document'));
      else {
          user.person_name = req.body.person_name;
          user.user_name = req.body.user_name;
          user.user_gst_number = req.body.user_gst_number;
  
          user.save().then(user => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });
  
  // Defined delete | remove | destroy route
  userRoutes.route('/delete/:id').get(function (req, res) {
      User.findByIdAndRemove({_id: req.params.id}, function(err, user){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });
  
  module.exports = userRoutes;