const displayUpdateUI = (id) => {
  const editDiv = document.getElementById('editCourse' + id)
  editDiv.classList.remove('inactive');
  editDiv.classList.add('active');
  // TODO
  // if course_id === last-child add margin-bottom: 21rem !important to .container
  // or: if course_id element === array of course-elements[-1]...
}

const cancelUpdate = (id) => {
  const editDiv = document.getElementById('editCourse' + id);
  editDiv.classList.remove('active');
  editDiv.classList.add('inactive');
  console.log('öadslkfjdls')
};

