const mongoose = require('mongoose');
const { Schema } = mongoose;

const stockSchema = new Schema({
  ingredient:String,
  qty:Number
  
});

const Stocks = mongoose.model('stocks', stockSchema);
module.exports = Stocks

