work in progress: 
# Project for Hamburg Coding School: Learning Management System (Node.js)

In this Repo I was working on an App to fill and manage a database for courses, students and teachers for [Hamburg Coding School](https://hamburgcodingschool.com/).
I started using a basic [tutorial from Brad Traversy](https://www.youtube.com/watch?v=bOHysWYMZM0&list=PLillGF-RfqbZyLc9sMQ72_u3FW9fVxo1p), customized it and expanded it's functionalities.
For scalibility (and fun 😉) I abandoned this project and started it with React. 


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
- Relational database for teachers, students, courses and course bookings of [Hamburg Coding School](https://hamburgcodingschool.com/).
- CRUD functionality
- intuitive and interactive interface

Pages:

### "Home"
- search all courses by name

### "All Courses"
- listing all courses
- edit a course
  - form is pre-filled with course data
  - all data is editable
  - after editing: confirmation of update is displayed
- delete a course
  - before deletion: confirmation requested
  - after deletion: confirmation of deletion is displayed


### "Add Course"
- form to add a course
- validation of data with direct feedback for user
- submit button enabled after validation

---
### Entity Relationship Diagram
![ERD - HAMBURG CODING SCHOOL LMS.png](/public/img/ERD-HAMBURG_CODING_SCHOOL_LMS.png)

&copy; 2021 - Clemens Bruesch