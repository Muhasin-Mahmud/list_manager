const router = require('express').Router();
const { addList, getLists, updateList, deleteList, deleteLists, getListsByUserId } = require('../controllers/listController');

router.post('/add', addList);
router.get('/:userId/lists', getListsByUserId);

router.delete('/:id', deleteList);
router.patch('/:id', updateList);

router.delete('/all/:userId', deleteLists);
router.get('/all', getLists);

module.exports = router;