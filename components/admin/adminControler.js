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





exports.updateOne = (req, res, next) => {

    adminService.findOne(req.params.id).then((admin) => admin.update({_amind_ID: req.params.id,
        _name: req.body._courseName,
        _description: req.body._description,
        _price: req.body._price,
        _star: req.body._star,
        _brief_description: req.body._brief_description
    }))
}

















