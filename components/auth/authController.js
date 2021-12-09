const adminService= require('./adminService')
exports.login=(req,res)=>{
    const wrong= req.query['wrong']!==undefined
    res.render('authentication/login', {wrong})
}
const passport=require('../../passport')


exports.register=(req,res, next)=>{
    const user=adminService.register(req.body)
    res.redirect('/')
}

