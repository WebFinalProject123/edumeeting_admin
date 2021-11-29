var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('classes/classes', { title: 'Express' });
});

module.exports = router;
