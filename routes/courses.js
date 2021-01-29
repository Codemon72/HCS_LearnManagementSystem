const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Courses = require("../models/Courses");

// Get all courses
router.get('/', (req, res) =>
  // res.send('all good so far 🏄‍♂️🥋')
  Courses.findAll()
    .then((courses) => {
      // console.log(courses);
      // res.sendStatus(200);
      res.render('courses', {
        // courses: courses
        courses: courses
      })
    })
    .catch((err) => console.log(err))
);

// Display form to add a course
router.get('/add', (req, res) => res.render('add'));

// Add a course
router.post('/add', (req, res) => {
  let { name, hours, start_date, end_date, teacher_id } = req.body;
  let errors = [];

  // Validate Fields
  if(!name) {
    errors.push({ text: 'Please add the course name' });
  }
  if(!hours) {
    errors.push({ text: 'Please add the number of hours' });
  }
  if(!start_date) {
    errors.push({ text: 'Please add the start date of the course' });
  }
  if(!end_date) {
    errors.push({ text: 'Please add the end date of the course' });
  }
  if(!teacher_id) {
    errors.push({ text: 'Please add the teacher id' });
  }

  // Check for errors
  if (errors.length > 0) {
    res.render('add', {
      errors,
      name, 
      hours, 
      start_date, 
      end_date, 
      teacher_id
    });
  } else {
    // Insert into table
    Courses.create({
      // instead of 'name: name' with ES6 we can go like this:
      name, 
      hours, 
      start_date, 
      end_date, 
      teacher_id
    })
    .then(blib => res.redirect('/courses'))
    .catch(err => console.log(err));
  }

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