const adminService=require('./adminService')
exports.list=async (req,res)=>{
    let admins=await adminService.list();
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