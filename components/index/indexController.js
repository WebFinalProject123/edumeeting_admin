const Course = require('../../models/courseModel')
const courseService = require('../index/indexService')
const classService = require('../classes/classService')


function compareClass( x, y ) {
    if ( x._currentNumber > y._currentNumber ){
      return -1;
    }
    if ( x._currentNumber < y._currentNumber ){
      return 1;
    }
    return 0;
  }

  function compareCourse( x, y ) {
    if ( x._star > y._star ){
      return -1;
    }
    if ( x._star < y._star ){
      return 1;
    }
    return 0;
  }
  


exports.list = (req, res, next) => {
    courseService.list().then((courses) => {

        classService.list().then((classList) => {


            res.render('index', {
                courses: courses.sort( compareCourse ).slice(0, 10),
                classes: classList.sort( compareClass ).slice(0, 10)
            })

        });
    });
}