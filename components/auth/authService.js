const User=require('../../models/userModel')
exports.findUserByUsername=(username)=>User.findOne({raw:true, where: {_userName: username}})