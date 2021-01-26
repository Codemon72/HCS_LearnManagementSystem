const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Courses = require('../models/Courses');

router.get('/', (req, res) => 
  // res.send('all good so far 🏄‍♂️🥋')
  Courses.findAll()
    .then(courses => {
      console.log(courses);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
  );

module.exports = router;