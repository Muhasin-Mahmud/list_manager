const mongoose = require("mongoose");
const userSchema = require('./userSchema');
const jwt = require('jsonwebtoken');

userSchema.methods.generateToken = () => {
    const user = this;
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    return token;
}

userSchema.statics.verifyToken = token => {
    const decryptedUser = jwt.verify(token, process.env.TOKEN_SECRET);
    return decryptedUser;
}

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;