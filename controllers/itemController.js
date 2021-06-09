const Item = require("../model/ItemModel");

exports.addItem = async (req, res, next) => {
  console.log(req.body)
  try {
    const item = await Item.create(req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.getItems = async (req, res, next) => {
  try {
    const items = await Item.find({ listId: req.params.id });
    res.send(items);
  } catch (err) {
    next(err);
  }
};

exports.getItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.updateItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const itemUpdate = await Item.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(itemUpdate);
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const itemRemove = await Item.findByIdAndDelete(id);
    res.json(itemRemove);
  } catch (err) {
    next(err);
  }
};

exports.deleteItems = async (req, res, next) => {
  try {
    const { listId } = req.params;
    await Item.deleteMany({listId});
    res.send('All Items Deleted !');
  } catch (err) {
    next(err);
  }
};