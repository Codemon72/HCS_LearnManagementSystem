work in progress: 
# Project for Hamburg Coding School: Learning Management System

In this Repo I am working on an App to fill and manage a database for courses, students and teachers for [Hamburg Coding School](https://hamburgcodingschool.com/).
I started using a basic [tutorial from Brad Traversy](https://www.youtube.com/watch?v=bOHysWYMZM0&list=PLillGF-RfqbZyLc9sMQ72_u3FW9fVxo1p), changed it up and am adding now lots of functionality.

## Tech Stack
- local Database with MariaDB
  - GUI: Sequel Ace
- Node.js
  - Express
  - Sequelize (ORM)
- Handlebars
- JavaScript
- HTML & CSS
- SQL

## Features
- Relational database for teachers, students, courses and course bookings of Hamburg Coding School.
- UX I put focus on: 
  - intuitive and interactive surface
  - all buttons styled for hover and focus
  - forms with error and verification messages
  - confirmation request before course deletion
  - confirmation upon deletion
  - sufficient contrast for accessibility

Pages:

### "Home"
- search all courses
- edit or delete

### "All Courses"
- listing of all courses
- edit or delete

### "Add Course"
- form to add a course
- validation of data with direct feedback for user
- submit button enabled after validation

---
### Entity Relationship Diagram
![ERD - HAMBURG CODING SCHOOL LMS.png](/public/img/ERD-HAMBURG_CODING_SCHOOL_LMS.png)

&copy; 2021 - Clemens Bruesch