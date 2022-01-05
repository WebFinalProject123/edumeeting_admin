var express = require('express');

// var multer  = require('multer');
// var upload = multer({ dest: './public/uploads/' })
var router = express.Router();
const courseController= require('../components/courses/courseController')

/* Update*/
router.get('/update/:id', courseController.showUpdate)
router.post('/update/p/:id', courseController.updateOne)
/* delete. */
router.get('/delete/:id', courseController.deleteOne);
router.get('/', courseController.list);
/* Insert*/
router.get('/insert', (req,res,next)=>{
    res.render('courses/insert')
})
router.post('/insert/p', courseController.insertOne)
/* GET home page. */

module.exports = router;


