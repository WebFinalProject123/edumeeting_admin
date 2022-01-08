const Admin= require('../../models/adminModel')
const User=require('../../models/userModel')
const Student=require('../../models/studentModel')
const cloudinary=require('../../cloudinay/config')
exports.list= ()=>{
    return Admin.findAll({raw: true, include:[{model: User}]})
}



exports.changeAvatar=(file)=>{
    const image=file
    return cloudinary.uploader.upload(image.tempFilePath, (err, result)=>
    {User.findOne({where: {_userName:req.user.username}})
    .then((user)=> {user.update(
        {_avatar: result.url}
        )
    return result.url}
        )})
}
exports.findOne=(id)=>Admin.findOne({where:{_amind_ID:id}, include:[{model: User}]})

exports.ban=(userID, action)=>User.findByPk(userID).then( async (user)=>{
    const status= (action==0)
    await user.update({_isBanned: status})
    return Student.findOne({include: [{model: User, where: {_ID: userID}}]})
})






