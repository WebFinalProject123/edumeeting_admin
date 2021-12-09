var express = require('express');
var router = express.Router();
const loggedInGuard=require('../middlewares/loggedInGuard')

/* GET home page. */
router.get('/',loggedInGuard,  function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index',loggedInGuard,  function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
