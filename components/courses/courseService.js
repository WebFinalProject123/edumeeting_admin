
const Class = require('../../models/classModel')
const Course = require('../../models/courseModel')
const Registration = require('../../models/registrationModel')
const {Op}=require('sequelize')

exports.list=()=> Course.findAll({raw: true})
exports.deleteOne=(id)=>{
    
        Class.destroy({where:{_course_ID:id}})
        Course.destroy({where:{_course_ID:id}})
    
}
exports.findRawOne=(id)=>Course.findOne({raw:true,where:{_course_ID:id}})
exports.findOne=(id)=>Course.findOne({where:{_course_ID:id}})
exports.insertOne=(req, _image)=>{
    return Course.create({
        _course_ID:null,
        _name: req.body._courseName,
        _description: req.body._description,
        _price: req.body._price,
        _type: req.body._type,
        _brief_description: req.body._brief_description,
        _image: _image,
        _views: 0
    })
}

exports.countCourseByName=(courseName)=> Course.count({where: {_name: courseName}})
exports.countCourseByNameAndID=(courseName, courseID)=> Course.count({where: {_name: courseName, _course_ID: {[Op.ne]: courseID}}})

exports.countRegistrations=(id)=> Registration.count({include: {model: Class, where: {_course_ID: id}}})