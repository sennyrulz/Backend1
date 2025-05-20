const students = require("../models/student.model")
const getStudent = (req, res)=>{
    return res.json(students)
}

const createStudent = (req, res)=>{
    const payload = req.body;
    console.log(payload)
    const newPayload = {id:students.length+1, ...payload}
    students.push(newPayload)
    return res.send("registration was sucessful!!")
}

const updateStudent = (req,res)=>{
    const payload = req.body;
    const userPosition = students.findIndex((student)=> student.id == payload.id)
    // const studentPosition = students.findIndex((students)=> students.email == payload.email)
    students.splice(userPosition, 1, payload)
    // console.log(studentPosition)
    return res.send("Your information is updated successfully")
}

const deleteStudent = (req, res)=>{
    const payload = req.body;
    const userPosition = students.findIndex((student)=> student.id == payload.id)
    students.splice(userPosition, 1)
    return res.send("Your information has been deleted")
}

module.exports = {getStudent, createStudent, updateStudent, deleteStudent}
