const Course = require('../../models/courseModel')
const courseService = require('../courses/courseService')
const cloudinary = require('../../cloudinay/config')
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
    courseService.findRawOne(req.params.id).then((course) => {
        if (req.query.wrong!==undefined) 
            res.render('courses/update', { course:course, wrong: true })
        else res.render('courses/update', { course:course})

    })
}

exports.insertOne = async (req, res, next) => {
    const courseCount = await courseService.countCourseByName(req.body._courseName)
    if (courseCount == 0) {
        const image = req.files._image
        console.log(image.tempFilePath)
        cloudinary.uploader.upload(image.tempFilePath, (err, result) => { courseService.insertOne(req, result.url).then(() => res.redirect('/courses')) })
    }
    else {
        res.redirect('/courses/insert?wrong')
    }
}

exports.updateOne = async (req, res, next) => {
    const courseCount = await courseService.countCourseByNameAndID(req.body._courseName, req.params.id)
    if (courseCount == 0) {
        let image
        if (req.files == undefined) {
            courseService.findOne(req.params.id).then((course) => course.update({
                _course_ID: req.params.id,
                _name: req.body._courseName,
                _description: req.body._description,
                _price: req.body._price,
                _type: req.body._type,
                _brief_description: req.body._brief_description
            }
            )
            )
                .then(() => { res.redirect('/courses') })
        }
        else {
            image = req.files._image
            cloudinary.uploader.upload(image.tempFilePath,
                (err, result) => {
                    courseService.findOne(req.params.id).then((course) => course.update({
                        _course_ID: req.params.id,
                        _name: req.body._courseName,
                        _description: req.body._description,
                        _price: req.body._price,
                        _type: req.body._type,
                        _brief_description: req.body._brief_description,
                        _image: result.url
                    }
                    )
                    )
                        .then(() => { res.redirect('/courses') })
                })
        }
    }
    else {
        res.redirect(`/courses/update/${req.params.id}?wrong`)
    }



}

exports.deleteOne = (req, res, next) => {
    courseService.deleteOne(req.params.id)
    res.redirect('/courses')
}


