const Class= require('../../models/classModel')
const Class_schedule = require('../../models/class_scheduleModel')
const Course = require('../../models/courseModel')
const Registration = require('../../models/registrationModel')
const teacher= require('../../models/teacherModel')
const User = require('../../models/userModel')
exports.list=()=> Class.findAll({raw: true
    , include: [{model: Course, as: 'Course'},{ model: teacher, as: 'Teacher', include: {model: User, as: 'User', attributes: ['_firstName', '_lastName']}, attributes: ['_teacher_ID']}]})

exports.deleteOne=(id)=>{
    Registration.destroy({where: {_class_ID:id}})
    Class_schedule.destroy({where: {_class_ID:id}})
    Class.destroy({where:{_class_ID:id}})
}
exports.updateOne=(id)=>{
    return Class.findOne({where:{_class_ID:id}})
}
exports.insertOne=(_class)=>{
    return Class.bulkCreate([_class])
}