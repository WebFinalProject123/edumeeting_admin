const classModel= require('../../models/classModel')
const Course = require('../../models/courseModel')
const teacher= require('../../models/teacherModel')
const User = require('../../models/userModel')
exports.list=()=> classModel.findAll({raw: true
    , include: [{model: Course, as: 'Course'},{ model: teacher, as: 'Teacher', include: {model: User, as: 'User', attributes: ['_firstName', '_lastName']}, attributes: ['_teacher_ID']}]})

exports.deleteOne=(id)=>{
    return Class.destroy({where:{_class_ID:id}})
}
exports.updateOne=(id)=>{
    return Class.findOne({where:{_class_ID:id}})
}
exports.insertOne=(_class)=>{
    return Class.bulkCreate([_class])
}