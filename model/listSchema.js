const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports = listSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
