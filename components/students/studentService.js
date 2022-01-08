const Student = require('../../models/studentModel')
const User = require('../../models/userModel')
exports.list= ()=>{
    return Student.findAll({raw: true, include:[{model: User}]})
}




exports.findOne=(id)=> Student.findOne({where:{ _student_ID :id}, include:[{model: User}]})

exports.findRawOne=(id)=>Student.findOne({raw:true , where:{ _student_ID :id}, include:[{model: User}]})










