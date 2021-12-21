const Admin= require('../../models/adminModel')
const User=require('../../models/userModel')
exports.list= ()=>{
    return Admin.findAll({raw: true, include:[{model: User}]})
}




exports.findOne=(id)=>Admin.findOne({where:{_amind_ID:id}, include:[{model: User}]})





