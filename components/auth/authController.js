const adminService= require('./adminService')
const authService= require('./authService')
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


exports.register= async (req,res, next)=>{
    const user= await authService.findUserByUsername(req.body.username)
    console.log(user)
    if (user!=null) 
        res.render('authentication/register',{wrong:true})
    else
    {
    await adminService.register(req.body)
    res.redirect('/admins')
    }
}

exports.addTeacher= async (req, res, next)=>{
    const user= await authService.findUserByUsername(req.body.username)
    if (user!=null) 
        res.render('authentication/addTeacher',{wrong:true})
    else{
    await adminService.addTeacher(req.body)
    res.redirect('/teachers')
    }
}

