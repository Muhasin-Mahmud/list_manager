const customError = require('../helpers/customError');
const User = require('../model/UserModel');

exports.auth = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) return next(customError('No token found! Please login'));

        try {
            const user = await User.verifyToken(token);
            req.user = user;
            next();
        } catch (error) {
            return next(customError(error.message, 401));
        }
        
    } catch (error) {
        next(error);
    }
}