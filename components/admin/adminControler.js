const adminService=require('./adminService')
exports.list=async (req,res)=>{
    let admins=await adminService.list(req.user.username);
    const page = parseInt(req.query.p) || 1
    const perpage = 9
    const start = (page - 1) * perpage
    const end = page * perpage
    const total = Math.ceil(admins.length / perpage)
    admins = admins.slice(start, end)
    res.render('admins/admins', 
    {admins:admins,
    pagination: {
        page: page,       // The current page the user is on
        pageCount: total // The total number of available pages
    }});
}

exports.changeAvatar= async (req, res)=>{
    const avatar=await adminService.changeAvatar(req.files.avatar)
    req.session.passport.user.avatar=avatar
    req.locals.admin=req.user
    res.render('/profile')
}
exports.ban= async (req, res)=>{
    console.log(req.params.userID)
    console.log(req.params.action)
    const student =await adminService.ban(req.params.userID, req.params.action)
    if (student)
        res.redirect('/students')
    else
        res.redirect('/admins')
}




















