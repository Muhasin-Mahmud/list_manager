const List = require("../model/ListModel");

exports.addList = async (req, res, next) => {
  try {
    const { title, description, userId } = req.body;
    const newList = await List.create({ title, description, userId });
    res.json(newList);
  } catch (err) {
    next(err);
  }
};

exports.getLists = async (req, res, next) => {
  try {
    const lists = await List.find().populate("itemId");
    res.send(lists);
  } catch (err) {
    next(err);
  }
};

exports.getList = async (req, res, next) => {
  try {
    const { id } = req.params;
    const list = await List.findById(id);
    res.json(list);
  } catch (err) {
    next(err);
  }
};

exports.updateList = async (req, res, next) => {
  try {
    const { id } = req.params;
    const listUpdate = await List.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(listUpdate);
  } catch (err) {
    next(err);
  }
};

exports.deleteList = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log('id here', id);
    const listRemove = await List.findByIdAndDelete(id);
    res.json(listRemove);
  } catch (err) {
    next(err);
  }
};

exports.deleteLists = async (req, res, next) => {
  try {
    const { userId } = req.params;
    await List.deleteMany({ userId });
    res.send('All Lists Deleted!');
  } catch (err) {
    next(err);
  }
};

exports.getListsByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const listsByUserId = await List.find({ userId });
    res.json(listsByUserId);
  } catch (err) {
    next(err);
  }
}
