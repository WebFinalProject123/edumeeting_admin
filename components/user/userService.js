const Class = require('../../models/classModel')
const User = require('../../models/userModel')




exports.findByUserName=(username) => User.findOne({where:{_userName:username}})


exports.updateByUserName=(username, info) => User.findOne({where:{_userName:username}})
    .then(_user =>  _user.update(
        {
            _firstName : info.firstName,
            _lastName : info.lastName,
            _phone : info.phone,
            _email : info.email,
            _address : info.address
        }
    ))











