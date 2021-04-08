const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Courses = require("../models/Courses");
const Teachers = require("../models/Teachers");
const { Sequelize, Op } = require("sequelize");


// Get all courses
router.get("/", (req, res) => {
  Courses.findAll({
    include: [Teachers],
  })
    .then((courses) => {
      // res.sendStatus(200);
      res.render("courses", {
        // courses: courses
        courses,
      });
    })
    .catch((err) => console.log(`Error: ${err}`));
});


// Display form to add a course
router.get("/add", (req, res) => res.render("add"));


// Add a course
router.post("/add", (req, res) => {
  let { name, hours, start_date, end_date, teacher_id } = req.body;
  if (teacher_id === "null") {
    teacher_id = null;
  }
  // Insert into table
  Courses.create({
    // instead of 'name: name' with ES6 we can go like this:
    name,
    hours,
    start_date,
    end_date,
    teacher_id,
  })
    .then((course) => res.redirect("/courses"))
    .catch((err) => console.log(err));
});

// Update a course
router.post("/update", (req, res) => {
  let { name, hours, start_date, end_date, teacher_id, course_id } = req.body;
  if (teacher_id === "null") {
    teacher_id = null;
  }
  Courses.update(
    { name, hours, start_date, end_date, teacher_id },
    { where: { course_id: course_id } }
  )
    .then(() => {
      // res.redirect("/courses" + "?updated=" + course_id);
      res.redirect("/courses" + "#courseDiv" + course_id);
    })
    .catch((err) => console.log(err));
});


// Delete a course
router.get("/delete/:id", (req, res) => {
  const idDeleted = parseInt(req.params.id);
  Courses.destroy({ where: { course_id: idDeleted } })
    .then(() => {
      // id of deleted course added to URL to display delete confirmation
      res.redirect("/courses" + "?deleted=" + idDeleted);
    })
    .catch((err) => console.log(err));
});


// Search for Courses
router.get("/search", (req, res) => {
  const { term } = req.query;
  Courses.findAll({
    where: { name: { [Op.like]: "%" + term + "%" } },
    include: [Teachers],
  })
    .then((courses) => res.render("courses", { courses }))
    .catch((err) => console.log("Error: " + err));
});

module.exports = router;


// Hacky way to quickly insert a course to the database:

// router.get('/add', (req, res) => {
//   const data = {
//     name: 'Vue.js',
//     hours: 24,
//     start_date: '2021-02-15',
//     end_date: '2021-03-03',
//     teacher_id: 9
//   };

//   let { name, hours, start_date, end_date, teacher_id } = data;

//   // Insert into table
//   Courses.create({
//     // instead of 'name: name' with ES6 we can go like this:
//     name,
//     hours,
//     start_date,
//     end_date,
//     teacher_id
//   })
//     .then(blib => res.redirect('/courses'))
//     .catch(err => console.log(err));
// });
