const Course = require('../../models/courseModel')
const courseService = require('../courses/courseService')

exports.list = (req, res, next) => {
    courseService.list().then((courses) => {
        console.log("courses")
        const page = parseInt(req.query.p) || 1
        const perpage = 9
        const start = (page - 1) * perpage
        const end = page * perpage
        const total = Math.ceil(courses.length / perpage)
        courses = courses.slice(start, end)
        res.render('courses/courses', {
            courses: courses,
            pagination: {
                page: page,       // The current page the user is on
                pageCount: total // The total number of available pages
            }
        })
    })
}
exports.showUpdate = (req, res, next) => {
    courseService.findOne(req.params.id).then((course) => {
        console.log(course)
        res.render('courses/update', { course })

    })
}

exports.insertOne = (req, res, next) => {
    
    courseService.insertOne(req).then(() => res.redirect('/courses'))
}

exports.updateOne = (req, res, next) => {
    courseService.findOne(req.params.id).then((course) => course.update({
            _course_ID: req.params.id,
            _name: req.body._courseName,
            _description: req.body._description,
            _price: req.body._price,
            _star: req.body._star,
            _brief_deccription: req.body._brief_deccription
        }
    )
    )
        .then(() => { res.redirect('/courses') })
}

exports.deleteOne = (req, res, next) => {
    courseService.deleteOne(req.params.id)
    res.redirect('/courses')
}