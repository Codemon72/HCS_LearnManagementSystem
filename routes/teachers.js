const express = require("express");
const router = express.Router();
const Courses = require("../models/Courses");
const Teachers = require("../models/Teachers");

// Get all teachers
router.get("/", (req, res) =>
  Teachers.findAll()
    .then((teachers) => {
      res.send(teachers);
    })
    .catch((err) => console.log(err))
);

module.exports = router;