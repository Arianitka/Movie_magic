const router = require('express').Router();
const authService = require('../services/authService')
const userService = require('../services/authService');


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
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const token = await authService.login(email, password);

    res.cookie('auth','token')
    res.redirect('/');
});
    
   

module.exports = router;