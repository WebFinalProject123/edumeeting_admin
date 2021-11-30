var express = require('express');
var router = express.Router();
var classController= require('../components/classes/classController')

/* Update*/
router.post('/update/p/:id', classController.updateOne)
router.get('/update/:id', classController.showUpdate)

/* Insert*/
router.post('/insert/p', classController.insertOne)
router.get('/insert', classController.showInsert)

/* GET home page. */

router.get('/delete/:id', classController.deleteOne);
router.get('/', classController.list);
module.exports = router;
