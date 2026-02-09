const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["STUDENT", "CARE_HOME", "ORGANIZER"], required: true },
  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);
