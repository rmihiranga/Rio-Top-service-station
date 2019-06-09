const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let User = new Schema({
  username: {
    type: String
  },
  vehicle_no: {
    type: String
  },
  vehicle_type: {
    type: String
  },
  Telephone: {
    type: String
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('user', User);