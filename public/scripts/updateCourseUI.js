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

const showUpdateConfirmation = (course_id) => {
  const divDeleteConfirm = document.getElementById("update-confirmation");
  divDeleteConfirm.innerText = `Course with ID: ${course_id} was updated!`;
  divDeleteConfirm.classList.remove("inactive");
  divDeleteConfirm.classList.add("active");
  setTimeout(() => {
    divDeleteConfirm.classList.remove("active");
    divDeleteConfirm.classList.add("inactive");
  }, 4000);
};

// check URL for the ID of an updated course
// let queryString = window.location.search; 
// let urlParams = new URLSearchParams(queryString); 
const idUpdated = new URLSearchParams(window.location.search).get('updated');

if (idUpdated) {
  showUpdateConfirmation(idUpdated)
};