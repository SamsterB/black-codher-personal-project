const mongoose = require('mongoose');
const Stocks = require('../models/Stock');

module.exports = (app) => {
  app.get("/stock",async (req,res)=>{
console.log("Hello from stock routes")
const results = await Stocks.find();
res.send(results)
})
};