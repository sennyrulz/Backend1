const express = require("express");
const studentRoutes = require("./routes/students.route")
const courseRoutes = require("./routes/course.route")
const app = express()

app.use(express.json())
app.use(studentRoutes)
app.use(courseRoutes)

app.listen(5001, ()=>{
    console.log('app is running in port 5001')
})


// {/*Path*/}
// app.get("/admin/login", (req, res)=>{
//     const myPath = req.path
//     const host = req.host
//     console.log(host)
//     console.log(myPath)
//     return res.send("User logged in successfully")
// })

// {/*ID*/}
// app.get("/admin/:id/:name", (req,res)=>{
//     const myParam = req.params
//     console.log(myParam)
//     return res.send("succesful")
// })

// {/*query*/}
// app.get("/testing", (req,res)=>{
//     const query = req.query
//     console.log(query)
//     return res.send("this is a query")
// })


