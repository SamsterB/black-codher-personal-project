const mongoose = require('mongoose');
const Punches = require('../models/Users');

module.exports = (app) => {
  app.get("/punches",async (req,res)=>{
const punches = await Punches.find();
res.send(punches)
})
};
