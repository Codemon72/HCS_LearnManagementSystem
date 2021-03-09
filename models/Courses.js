const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');
const Teachers = require('./Teachers');

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
    type: DataTypes.INTEGER,
    references: {
      model: Teachers,
      key: 'teacher_id'
    }
  }
}, {
  freezeTableName: true
});

// From the Docs: 
// Courses.hasOne(Teachers);

// From Thomas Smith's Tutorials:
Courses.associate = (models) => {
  Courses.hasOne(models.Teachers, {foreignKey: 'teacher_id'})
};

module.exports = Courses;