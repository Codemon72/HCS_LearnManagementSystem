const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Teachers = require("../models/Teachers");

// Get all teachers
router.get("/", (req, res) =>
  Teachers.findAll()
    .then((teachers) => {
      // res.sendStatus(200);
      res.send(teachers);
    })
    .catch((err) => console.log(err))
);

module.exports = router;