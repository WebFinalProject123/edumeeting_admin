var express = require('express');
var router = express.Router();
var classController= require('../components/classes/classController')

/* Update*/
router.get('/update/:id', classController.showUpdate)
router.post('/update/p/:id', classController.updateOne)
/* Insert*/
router.get('/insert', (req,res,next)=>{
    res.render('classes/update')
})
router.post('/insert/p', classController.insertOne)
/* GET home page. */

router.get('/delete/:id', classController.deleteOne);
router.get('/', classController.list);
module.exports = router;
