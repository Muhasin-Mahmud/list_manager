const mongoose = require('mongoose');
const {Schema} = mongoose
module.exports = itemSchema = new Schema({
    text: {type: String, required: true},
    status: {type: Boolean, required: true},
    priority: {type: Number, required: true},

    listId: {
        type:Schema.Types.ObjectId,
        required: true,
        ref: "List"
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {
    versionKey: false,
    timestamps: true
})