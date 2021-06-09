const router = require('express').Router();
const { getAllUsers, registerUser, loginUser } = require('../controllers/userController');

router.get('/', getAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;



