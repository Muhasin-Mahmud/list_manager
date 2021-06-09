const mongoose = require("mongoose");
const itemSchema = require('./itemSchema');

const ItemModel = mongoose.model("Item", itemSchema);
module.exports = ItemModel;