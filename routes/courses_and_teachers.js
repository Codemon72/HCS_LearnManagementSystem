const express = require("express");
const router = express.Router();
const Courses = require("../models/Courses");
const Teachers = require("../models/Teachers");

// SELECT c.*, t.name 
// FROM courses AS c
// JOIN teachers AS t
// ON t.teacher_id = c.teacher_id;

// Get everything from courses AND teachers names

router.get("/", (req, res) =>
  Teachers.findAll()
    .then((teachers) => {
      // res.sendStatus(200);
      res.send(teachers);
    })
    .catch((err) => console.log(err))
);

module.exports = router;