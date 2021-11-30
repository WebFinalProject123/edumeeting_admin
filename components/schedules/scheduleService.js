const Schedule= require('../../models/scheduleModel')

exports.list=()=>{
    return Schedule.findAll({raw: true})
}