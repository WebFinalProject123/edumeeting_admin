var express = require('express');
var router = express.Router();
var classController= require('../components/classes/classController')


// /* Delete*/
// router.post('/delete', classController.deleteOne)
// /* Update*/
// router.post('/update', classController.updateOne)
// /* Insert*/
// router.get('/insert', (req,res,next)=>{
//     res.render('classes/insert')
// })
// router.post('/insert', classController.insertOne)
/* GET home page. */
router.get('/', classController.list);
module.exports = router;
