const Teacher= require('../../models/teacherModel')
const User = require('../../models/userModel')

exports.list=()=>{
    return Teacher.findAll({raw: true,include: [{model:User}]})
}