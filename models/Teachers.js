const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');
const Courses = require('./Courses');

const Teachers = db.define('Teachers', {
  teacher_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(40)
  },
  email: {
    type: DataTypes.STRING(40)
  }
}, {
  freezeTableName: true
});

// From the Docs: 
// Teachers.hasMany(Courses);

// From Thomas Smith's Tutorials:
Teachers.associate = (models) => {
  Teachers.hasMany(models.Courses)
}

module.exports = Teachers;