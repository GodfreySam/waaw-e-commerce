const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  avatarSmall: String,
  avatar: String,
  secretToken: String,
  confirmed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports =  {
  User: model('user', userSchema)
}