const express = require("express")
const {createCourse, getCourse, updateCourse, deleteCourse} = require ("../controllers/courses.controller")
const route = express.Router()

route.post("/course", createCourse)
route.get("/course", getCourse)
route.put("/course", updateCourse)
route.delete("/course", deleteCourse)

module.export = route