const course = require('../../models/courseModel')
const indexService = require('../index/indexService')
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
  



  async function getDateSum(data) {
    var sums = data.reduce(function(acc, obj) {
      var date = obj.date;
      if (!acc[date]) {
        acc[date] = {count:0};
      }
      
      acc[date].count++;
      return acc;
    }, Object.create(null));
    
    return Object.keys(sums).map(function(date) {
      return {'date':date, 'count':sums[date].count};
    });
  }



  async function getMonthSum(data) {
    data.forEach((i) => {
      i.date = i.date.split('-')[0] + "-"+i.date.split('-')[1]
    });
    var sums = data.reduce(function(acc, obj) {
      var date = obj.date;
      if (!acc[date]) {
        acc[date] = {count:0};
      }
      
      acc[date].count++;
      return acc;
    }, Object.create(null));
    
    return Object.keys(sums).map(function(date) {
      return {'date':date, 'count':sums[date].count};
    });
  }

  async function getYearSum(data) {
    data.forEach((i) => {
      i.date = i.date.split('-')[0];
    });
    var sums = data.reduce(function(acc, obj) {
      var date = obj.date;
      if (!acc[date]) {
        acc[date] = {count:0};
      }
      
      acc[date].count++;
      return acc;
    }, Object.create(null));
    
    return Object.keys(sums).map(function(date) {
      return {'date':date, 'count':sums[date].count};
    });
  }


  


exports.list = async(req, res, next) => {



  datalist =  []
  const day = await indexService.sthlist();
  
  day.forEach((i) => {
    console.log(i);
  });
  const _date = await getDateSum(day);
  const _month = await getMonthSum(day);
  const _year = await getYearSum(day);
  console.log(_date);
  console.log(_month);
  console.log(_year);
  

 

  indexService.list().then((courses) => {

      classService.list().then((classList) => {


          res.render('index', {
              courses: courses.sort( compareCourse ).slice(0, 10),
              classes: classList.sort( compareClass ).slice(0, 10),
              _date : _date,
              _month: _month,
              _year : _year
          })

      });
  });
}








