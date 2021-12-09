var express = require('express');
var router = express.Router();
var authController=require('../components/auth/authController')
var passport=require('../passport')
const loggedInGuard=require('../middlewares/loggedInGuard')
/* GET home page. */
router.get('/login', authController.login);
router.post('/login', passport.authenticate('local', 
{ successRedirect: '/index',
failureRedirect: '/login?wrong',
}));
router.get('/logout', (req,res)=>{
    req.logout()
    res.redirect('/')
})
/* GET home page. */
router.get('/register',loggedInGuard, function(req, res, next) {
    res.render('authentication/register', { title: 'Express' });
  });
router.post('/register', authController.register)
module.exports = router;