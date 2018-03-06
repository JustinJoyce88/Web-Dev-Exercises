var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
module.exports = mongoose.model("User", userSchema);