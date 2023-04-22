/*********************************************************************************
*  WEB700 – Assignment 04
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part 
*  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name:Sercan Yildiz Student ID: 131043226 Date: 04/22/2023
*
*
*
********************************************************************************/ 



var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
const cd = require('./modules/collegedata.js');
app.use(express.static('public'))


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get("/htmlDemo", (req, res) => {
    res.sendFile(__dirname + '/views/htmlDemo.html');
});

app.get("/student/add", (req, res) => {
    res.sendFile(__dirname + "/views/addStudent.html");
});
  
  app.post("/student/add", (req, res) => {
    return comData.addStudent(req.body).then((response) => {
      if (response) {
        res.redirect("/students");
      }
    });
});

app.get("/students",(req,res)=>{
    var course=req.query.course
    if (typeof course !== 'undefined') {
        cd.getStudentsByCourse(course).then(studentData => {
            res.send(studentDatanod);
          });
      } else {
        cd.getAllStudents().then(studentData => {
            res.send(studentData);
          });
      }
});
app.get("/tas",(req,res)=>{
    cd.getAs().then(taData => {
        res.send(taData);
      });
});
app.get("/courses",(req,res)=>{
    cd.getCourses().then(courseData => {
        res.send(courseData);
      });
});
app.get("/students/:num",(req,res)=>{
    var num = req.params.num;
    var numValue = parseInt(num);
    cd.getStudentByNum(numValue).then(studentData => {
        res.send(studentData);
      });
  
});
app.get('*', function(req, res){
    res.status(404).send('PAGE NOT FOUND!!!!');
  });
app.listen(HTTP_PORT, ()=>{console.log("server listening on port: " + HTTP_PORT)
cd.initilize()
});
