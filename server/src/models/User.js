const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, min: 3 },
  password: { type: String, required: true, min: 7 },
  createdAt: { type: Date, default: Date.now },
  userId: {
    type: String,
    required: true,
    unique: true,
    default: () => {
      return new mongoose.Types.ObjectId().toString();
    },
  },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
