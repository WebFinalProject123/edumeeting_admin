const teacherService = require('./teacherService')
exports.list= async (req,res)=>{
    let teachers=await teacherService.list()
    const page = parseInt(req.query.p) || 1
    const perpage = 9
    const start = (page - 1) * perpage
    const end = page * perpage
    const total = Math.ceil(teachers.length / perpage)
    teachers = teachers.slice(start, end)
    res.render('teacher/teachers', {teachers,
        pagination: {
            page: page,       // The current page the user is on
            pageCount: total // The total number of available pages
    }})
}