
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
      avatar: req.body.avatar,
    });
  
    try {
        const user = await newUser.save();
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

exports.googleLoginUser = async (req, res) => {
    // Here from the google login we take the user object google returns
    // email: "test@test.org"
    // familyName: "Psychas"
    // givenName: "Vasilis"
    // googleId: ....
    // imageUrl: ....
    // name: "Vasilis Psychas"
    //
    // Is there a user with this email already? Then log me in to that account and
    // If there is no user then just create one (just like we do in signUp)
    const { email, googleId, firstName, lastName } = req.body; //email, googleId, firstName, lastName
    try {
      let user = await User.findOne({
        email,
      });
  
      console.log('USER FOUND', user);
  
      if (!user) {
        // Why findOneAndUpdate i hear you ask
        // Stackoverflow says:
        // What's going on is that none of Mongoose's validation, middleware,
        // or default values are used when calling any of the "update" family of
        // methods, like findByIdAndUpdate. They're only invoked by calls to save or create.
        // Sooooooo that means even though we create a user with no password using findOneAndUpdate,
        //  nobody cares cause we bypass the schema rules.
  
        user = await User.findOneAndUpdate(
          { email },
          { googleId, email, firstName, lastName },
          { new: true, upsert: true }
        );
  
        console.log('USER CREATED', user);
  
        if (!user)
          return next(
            customError(
              `Not found this user with email ${email}, my friend. Try again...`,
              401
            )
          );
      }
      
    // After user creation we follow the normal path
    // Generate a token
    const token = user.generateToken();
    res.json({ user, token });
    console.log('TOKEN', token);
    res.header('auth-token', token).json({ user, token }); //why in the header
} catch (error) {
    next(error);
  }
};