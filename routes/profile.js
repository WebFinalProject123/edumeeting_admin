var express = require('express');
var router = express.Router();
const userController= require('../components/user/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile/profile', { title: 'Express' });
});

module.exports = router;


/* Update*/
router.post('/update', userController.updateByUserName)