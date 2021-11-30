var express = require('express');
var router = express.Router();
const courseController= require('../components/courses/courseController')

/* GET home page. */
router.get('/delete/:id', courseController.deleteOne);
router.get('/', courseController.list);

module.exports = router;