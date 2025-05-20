const courses = require("../models/course.model")
const createCourse = (req, res)=>{
    return res.send("course created")
}

const getCourse = (req, res)=>{
    return res.json(courses)
}

const updateCourse = (req, res)=>{
    return res.send("course updated successfully")
}

const deleteCourse = (req, res)=>{
    return res.send("course deleted successfully")
}

module.exports = {createCourse, getCourse, updateCourse, deleteCourse}