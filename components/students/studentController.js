const studentService = require('./studentService')
exports.list=async (req,res)=>{
    let students =await studentService.list();
    const page = parseInt(req.query.p) || 1
    const perpage = 9
    const start = (page - 1) * perpage
    const end = page * perpage
    const total = Math.ceil(students.length / perpage)
    students = students.slice(start, end)
    res.render('students/students', 
    {students : students,
    pagination: {
        page: page,       // The current page the user is on
        pageCount: total // The total number of available pages
    }});
}





exports.showUpdate = (req, res, next) => {
    studentService.findRawOne(req.params.id).then((student) => {
        console.log(student)
        res.render('students/studentDetail', { student })

    })
}
















