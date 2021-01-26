const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Courses = db.define('Courses', {
  course_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(40)
  },
  hours: {
    type: DataTypes.INTEGER
  },
  start_date: {
    type: DataTypes.DATEONLY
  },
  end_date: {
    type: DataTypes.DATEONLY
  },
  teacher_id: {
    type: DataTypes.INTEGER
    // TODO: foreign key
  }
})

module.exports = Courses;