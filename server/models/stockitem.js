const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema for stock item in mongodb
//names should be the names in HTML forum feilds
const stockitemSchema = new Schema ({
    itemID:String,
    itemName:String,
    itemAmount: Number,
    totalCost: Number,
    dealersName:String,
    availableAmount:Number,
    limit:Number
});

//(name of the model, a post model is going to have a name and content, collection name in db)
module.exports = mongoose.model('item',stockitemSchema,'stock');