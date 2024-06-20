const router = require('express').Router();
const authService = require('../services/authService')
const userService = require('../services/authService')

router.get('/register', (req, res) => {
    res.render('auth/register')

});

router.post('/register', async (req, res) => {
const userData = req.body;
await authService.register(userData);
console.log(userData);


res.redirect('/auth/login');
});

router.get('/login', (req, res) => {
    res.render('auth/login')
})


module.exports = router;