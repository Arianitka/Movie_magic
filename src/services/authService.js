const User = require('../models/User');

exports.register = (userData) => {
    console.log(userData);
    User.create(userData);
}