const router = require('express').Router();
const {
    getAllUsers,
    registerUser,
    loginUser,
    googleLoginUser,
  } = require('../controllers/userController');

router.get('/', getAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/googleLogin', googleLoginUser);
module.exports = router;
