
const Class = require('../../models/classModel')
const Course = require('../../models/courseModel')

exports.list=()=> Course.findAll({raw: true})
exports.deleteOne=(id)=>{
    Class.destroy({where:{_course_ID:id}})
    Course.destroy({where:{_course_ID:id}})
}
exports.updateOne=(id)=>{
    return Course.findOne({where:{_course_ID:id}})
}
exports.insertOne=(course)=>{
    return Course.bulkCreate([course])
}