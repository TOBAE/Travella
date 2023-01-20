// exports.Flights = [];

const {Schema, model} = require("mongoose");

const flightSchema = new Schema({
      from:{
        type: String,
        require: true
      },

      to:{
        type: String,
        require: true,
      },

      date:{
        type: String,
        require: true,
      },

      promoCode:{
        type: String,
        require: true
      },

}, {timeStamps: true});

const Flights = model('flight', flightSchema);

module.exports = Flights;