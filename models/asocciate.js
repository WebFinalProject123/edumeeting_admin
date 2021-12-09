const Class = require('./classModel')
const Course = require('./courseModel')
const sequelize = require('./index')
const Registration = require('./registrationModel')
const Schedule = require('./scheduleModel')
const Student = require('./studentModel')
const Teacher = require('./teacherModel')
const User = require('./userModel')
const Admin = require('./adminModel')
//const Teacher = require('./teacherModel')
module.exports= ()=>{
    Teacher.belongsTo(User, {foreignKey: '_user_ID', targetKey: '_ID'})
    User. hasOne(Teacher, {foreignKey: '_user_ID'})

    Class.belongsTo(Course, {foreignKey: '_course_ID', targetKey: '_course_ID'})
    Course.hasMany(Class,{foreignKey: '_course_ID'})

    Class.belongsTo(Teacher, {foreignKey: '_teacher_ID', targetKey: '_teacher_ID'})
    Teacher.hasMany(Class, {foreignKey: '_teacher_ID'})

    Class.belongsTo(Schedule,{as: 'Schedule1',foreignKey:'_schedule_ID_1', targetKey:'_schedule_ID'})
    Schedule.hasMany(Class, {foreignKey: '_schedule_ID_1', as: 'Schedule1'})

    Class.belongsTo(Schedule,{ as: 'Schedule2',foreignKey:'_schedule_ID_2', targetKey:'_schedule_ID'})
    Schedule.hasMany(Class, {foreignKey: '_schedule_ID_2', as: 'Schedule2'})

    Registration.belongsTo(Class, {foreignKey:'_class_ID', targetKey: '_class_ID'})
    Class.hasMany(Registration,{foreignKey:'_class_ID'})

    Registration.belongsTo(Student, {foreignKey:'_student_ID', targetKey: '_student_ID'})
    Student.hasMany(Registration,{foreignKey:'_student_ID'})

    Student.belongsTo(User, {foreignKey: '_user_ID', targetKey: '_ID'})
    User. hasOne(Student, {foreignKey: '_user_ID'})

    Admin.belongsTo(User , {foreignKey: '_user_ID', targetKey: '_ID'})
    User. hasOne(Admin, {foreignKey: '_user_ID'})



}