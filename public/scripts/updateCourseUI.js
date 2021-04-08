const displayUpdateUI = (id) => {
  const editDiv = document.getElementById('editCourse' + id)
  editDiv.classList.remove('inactive');
  editDiv.classList.add('active');
}

const cancelUpdate = (id) => {
  const editDiv = document.getElementById('editCourse' + id);
  editDiv.classList.remove('active');
  editDiv.classList.add('inactive');
};

