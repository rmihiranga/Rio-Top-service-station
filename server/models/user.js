const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema for posts data in mongodb 
const userSchema = new Schema({
    name :String,
    nic: String
});

//(name of the model, a post model is going to have a name and content, collection name in db)
//if we use this model elsewhere we need to export the model
module.exports = mongoose.model('user',userSchema,'users');