const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const LoginSchema = new Schema({
  email: {
    type: String,
    required: true, 
    unique: true, 
    trim: true, 
    validate: { 
      validator: (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
      message: 'Invalid email format'
    }
  },
  password: {
    type: String,
    required: true, 
    minlength: 6 
  },
  username : {
    type : String,
    required : true
  },
  mobile : {
    type : String,
    required : true
  }
});

module.exports = mongoose.model('Login', LoginSchema);
