const mongoose = require('mongoose');
const { Schema } = mongoose;
module.exports = userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false, default: '/statics/01.png' },
    googleId: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
        virtuals: true,
        // with "transform" we can hide fields (e.g. password) from our API output
        // transform will always get called when we return a document from API with res.json
        transform: (docOriginal, docToReturn) => {
          delete docToReturn.password; // hide password field in all res.json outputs...
        },
    },
}
);