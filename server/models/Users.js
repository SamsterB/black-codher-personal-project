const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id:Number,
  product_name:String,
  description:String,
  price:Number,
  currency:String,
  thumb:String,
  ingredients:Object
});

const Punches = mongoose.model('punches', userSchema);
module.exports = Punches