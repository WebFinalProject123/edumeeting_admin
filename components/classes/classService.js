const Class= require('../../models/classModel')
const Course = require('../../models/courseModel')
const Registration = require('../../models/registrationModel')
const Schedule = require('../../models/scheduleModel')
const Teacher = require('../../models/teacherModel')
const teacher= require('../../models/teacherModel')
const User = require('../../models/userModel')
const {Op}=require('sequelize')
exports.list=()=> Class.findAll({raw: true, order: [["_startDate", "DESC"]]
    , include: [{model: Course, as: 'Course'},{ model: teacher, as: 'Teacher', include: {model: User, as: 'User', attributes: ['_firstName', '_lastName']}, attributes: ['_teacher_ID']}]})

exports.deleteOne=(id)=>{
    Registration.destroy({where: {_class_ID:id}})
    Class.destroy({where:{_class_ID:id}})
}
exports.findOne=(id)=>{
    return Class.findOne({raw: true, where:{_class_ID:id}, include:[{model: Course},{model: Schedule, as: 'Schedule1'},{model: Schedule, as: 'Schedule2'}, {model: Teacher, include:[{model: User}]}]})
}
exports.updateOne=(id)=>{
    return Class.findOne({where:{_class_ID:id}})
}
exports.insertOne= (req)=>Class.create( {
        _class_ID: null,
        _course_ID: parseInt(req.body._course_ID),
        _className: req.body._className,
        _startDate: req.body._startDate,
        _endDate: req.body._endDate,
        _maxNumber: req.body._maxNumber,
        _currentNumber: 0,
        _room: req.body._room,
        _numberOfLesson: req.body._numberOfLesson,
        _teacher_ID: req.body._teacher_ID,
        _schedule_ID_1: req.body._schedule_ID_1,
        _schedule_ID_2: req.body._schedule_ID_2
    })

exports.countClassByname=(courseID, className)=>Class.count({where: {_course_ID: courseID,_className: className}})
exports.countClassBynameAndID=(courseID,className, classID)=>Class.count({where: {_course_ID:courseID,_className: className, _class_ID: {[Op.ne]: classID}}})
    
    