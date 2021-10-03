const Sequelize = require("sequelize");
var express = require("express");
var app = express();
var mysql = require("mysql");
const db = require("./models/index");
const cors = require("cors");
const studentinfo = require("./models/studentinfo");

app.use(express.json());
app.use(cors());
const sequelize = new Sequelize("nathandb", "root", "123", {
  host: "localhost",
  port: 3000,
  dialect: "mysql",
});

app.post("/test", function (request, response) {
  return db.studentinfo
    .create({
      name: request.body.name,
      register_number: request.body.register_number,
      email: request.body.email,
      department: request.body.department,
      phone_number: request.body.phone_number,
      father_name: request.body.father_name,
    })
    .then((studentinfo) => {
      response.send(studentinfo);
    })
    .catch((err) => {
      response.send(err);
    });
});
app.get("/getalldata", function (request, response) {
  db.studentinfo
    .findAll()
    .then(function (studentinfo) {
      console.log(studentinfo);
      response.send({
        error: false,
        message: "studentinfo",
        data: studentinfo,
      });
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.listen(8000, function () {
  console.log("Server is Running");
});
