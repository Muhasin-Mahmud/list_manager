
const User = require('../model/UserModel');
const { registerValidation, loginValidation } = require('../middleware/validation');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        next(err);
    }
}

exports.registerUser = async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send(`Email already exists`);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.avatar
    });
    
    try {
        const user = await newUser.save(); //whats the difference between .save and .create
        const token = user.generateToken();
        res.json({ user, token });
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.loginUser = async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send(`Email is not found!`);

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid Password');

    const token = user.generateToken();
    res.header('auth-token', token).json({ user, token }); //why in the header
}