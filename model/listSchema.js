const mongoose = require("mongoose");
const {Schema} = mongoose
const itemSchema = require("./itemSchema");


module.exports = listSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    // items:[ {
    //     type: Schema.Types.ObjectId, // all references have to have ObjectId
    //     required: true,
    //     ref: 'Item' // tell mongoose in WHICH collection to look up this ID
    // }],
  
    userId: {
        type: Schema.Types.ObjectId, // all references have to have ObjectId
        required: true,
        ref: 'User' // tell mongoose in WHICH collection to look up this ID
    }
}, {
    versionKey: false,
    timestamps: true
})