const Class = require('../../models/classModel')
const User = require('../../models/userModel')




exports.findByUserName=(username) => User.findOne({where:{_userName:username}})


exports.updateByUserName=(username, info) => User.findOne({where:{_userName:username}})
    .then(_user =>  _user.update(
        {
            _firstName : info._firstName,
            _lastName : info._lastName,
            _phone : info._phone,
            _email : info._email,
            _address : info._address
        }
    ))











