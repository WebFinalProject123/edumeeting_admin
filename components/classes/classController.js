const Class = require('../../models/classModel')
const classService = require('../classes/classService')
const courseService = require('../courses/courseService')
const scheduleService = require('../schedules/scheduleService')
const teacherService = require('../teachers/teacherService')

exports.list = (req, res, next) => {
    classService.list().then((classes) => {
        const page = parseInt(req.query.p) || 1
        const perpage = 6
        const start = (page - 1) * perpage
        const end = page * perpage
        const total = Math.ceil(classes.length / perpage)
        classes = classes.slice(start, end)
        res.render('classes/classes', {
            classes: classes,
            pagination: {
                page: page,       // The current page the user is on
                pageCount: total // The total number of available pages
            }
        })
    })
}
exports.showInsert = (req, res, next) => {
    const obj = new Object()
    teacherService.list().then((teachers) => obj.teachers = teachers)
        .then(() => courseService.list())
        .then((courses) => obj.courses = courses)
        .then(() => scheduleService.list())
        .then((schedules) => obj.schedules = schedules)
        .then(() => {
            res.render('classes/insert', obj)
        })
}

exports.showUpdate = (req, res, next) => {
    const obj = new Object()
    classService.findOne(req.params.id).then((_class) => {
        return obj._class = _class

    })
        .then(() => teacherService.list())
        .then((teachers) => obj.teachers = teachers)
        .then(() => {
            return courseService.list()

        })
        .then((courses) => obj.courses = courses)
        .then(() => {
            return scheduleService.list()

        })
        .then((schedules) => obj.schedules = schedules)
        .then(() => {
            console.log(obj)
            res.render('classes/update', obj)
        })

}

exports.insertOne = (req, res, next) => {


    classService.insertOne(req).then(() => res.redirect('/classes'))
}

exports.updateOne = (req, res, next) => {
    classService.updateOne(req.params.id).then((__class) => __class.update({
        _course_ID: req.body._course_ID,
        _className: req.body._className,
        _startDate: req.body._startDate,
        _endDate: req.body._endDate,
        _maxNumber: req.body._maxNumber,
        _currentNumber: req.body._currentNumber,
        _room: req.body._room,
        _numberOfLesson: req.body._numberOfLesson,
        _teacher_ID: req.body._teacher_ID,
        _schedule_ID_1: req.body._schedule_ID_1,
        _schedule_ID_2: req.body._schedule_ID_2
    })).then(() => { res.redirect('/classes') })
}


exports.deleteOne = (req, res, next) => {
    console.log(req.params.id)
    classService.deleteOne(req.params.id)
    res.redirect('/classes')
}
