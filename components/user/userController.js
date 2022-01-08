const userService = require('./userService')



exports.updateByUserName=async (req,res)=>{ 
    await userService.updateByUserName (req.user.username, req.body)   
    
    req.session.passport.user.firstName = req.body._firstName
    req.session.passport.user.lastName = req.body._lastName
    req.session.passport.user.email = req.body._email
    req.session.passport.user.phone = req.body._phone
    req.session.passport.user.address = req.body._address

    res.locals.admin=req.user

    res.redirect('/profile')

}
















