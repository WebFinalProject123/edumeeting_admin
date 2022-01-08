const adminService= require('./adminService')
exports.login=(req,res)=>{
    const wrong= req.query['wrong']!==undefined
    if (wrong) {
        const Message=req.flash('error')
        console.log(Message)
        res.render('authentication/login', {wrong:wrong, Message:Message})
    }
    else 
        res.render('authentication/login')
}
const passport=require('../../passport')


exports.register=(req,res, next)=>{
    const user=adminService.register(req.body)
    res.redirect('/index')
}

