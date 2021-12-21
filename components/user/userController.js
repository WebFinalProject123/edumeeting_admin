const userService = require('./userService')



exports.updateByUserName=async (req,res)=>{ 
    await userService.updateByUserName (req.user.username, req.query)   
    
    req.user.firstName = req.query.firstName
    req.user.lastName = req.query.lastName
    req.user.email = req.query.email
    req.user.phone = req.query.phone
    req.user.address = req.query.address

    res.redirect('/profile')

}
















