const Admin = require("../../models/adminModel")
const User = require("../../models/userModel")
const Teacher = require("../../models/teacherModel")
const bcrypt= require('bcrypt')

exports.findByUserName=(username)=>{
    return Admin.findOne({raw: true, include:[{model:User, where:{_userName:username}}]})
}
exports.validatePassword=async (admin, password)=>{
    return await bcrypt.compare(password,admin['User._password'])
}
exports.register=async (infor)=>{
    
    const passHash= await bcrypt.hash(infor.password[0], 10)
    const user= await User.create({
        _ID: null,
        _userName: infor.username,
        _password: passHash,
        _firstName: infor.firstName,
        _lastName: infor.lastName,
        _email: infor.email,
        _phone: infor.phone,
        _address: infor.address,
        _avatar: 'https://res.cloudinary.com/vodinhphuc-fit-hcmus/image/upload/v1639024672/edumeeting/images/admin_pmsjv8.png'
    })
    await Admin.create({
        _amind_ID: null,
        _user_ID: user._ID
    })
    return user;
}

exports.addTeacher=async (infor)=>{
    
    const passHash= await bcrypt.hash(infor.password[0], 10)
    const user= await User.create({
        _ID: null,
        _userName: infor.username,
        _password: passHash,
        _firstName: infor.firstName,
        _lastName: infor.lastName,
        _email: infor.email,
        _phone: infor.phone,
        _address: infor.address,
        _avatar: 'https://res.cloudinary.com/vodinhphuc-fit-hcmus/image/upload/v1639024672/edumeeting/images/admin_pmsjv8.png'
    })
    await Teacher.create({
        _teacher_ID: null,
        _user_ID: user._ID,
        _degree: infor.degree,
        _startDate: infor.startDate,
        _salary: infor.salary
    })
}