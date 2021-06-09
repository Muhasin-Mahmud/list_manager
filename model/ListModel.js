const mongoose = require("mongoose");
const listSchema = require('./listSchema');

const ListModel = mongoose.model("List", listSchema);
module.exports = ListModel;
