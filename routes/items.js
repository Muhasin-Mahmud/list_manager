const router = require('express').Router();

const {
    addItem,
    getItems,
    getItem,
    updateItem,
    deleteItem,
    deleteItems
} = require('../controllers/itemController');

router.route('/list/:id').get(getItems).post(addItem);
router.route('/:id').get(getItem).put(updateItem).delete(deleteItem)
router.route('/delete/:listId').delete(deleteItems)

module.exports = router;