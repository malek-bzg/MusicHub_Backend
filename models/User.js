const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
  },


    email:{
      type: String,
      required: true
  },
    password:{
      type: String,
      required: true
  },
  photoProfil: {
      type: String,
     // default: "http://localhost:3000/upload/default-profile.png",
      required: false
  },
    isVerified: { type: Boolean },
   
  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
);
module.exports = mongoose.model("User", UserSchema);
