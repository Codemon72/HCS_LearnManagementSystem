const confirmDelete = (id) => {
  const deleteDiv = document.getElementById("deleteCourse" + id);
  deleteDiv.classList.remove("inactive");
  deleteDiv.classList.add("active");
};

const cancelDelete = (id) => {
  const deleteDiv = document.getElementById("deleteCourse" + id);
  deleteDiv.classList.remove("active");
  deleteDiv.classList.add("inactive");
};

const deleteCourse = (course_id) => {
  window.location.replace(`/courses/delete/${course_id}`);
};

const showDeleteConfirmation = (course_id) => {
  const divDeleteConfirm = document.getElementById("delete-confirmation");
  divDeleteConfirm.innerText = `Course with ID: ${course_id} was deleted!`;
  divDeleteConfirm.classList.remove("inactive");
  divDeleteConfirm.classList.add("active");
  setTimeout(() => {
    divDeleteConfirm.classList.remove("active");
    divDeleteConfirm.classList.add("inactive");
  }, 4000);
};

// check URL for the ID of a deleted course
let queryString = window.location.search; 
let urlParams = new URLSearchParams(queryString); 
const idDeleted = urlParams.get('deleted');

if (idDeleted) {
  showDeleteConfirmation(idDeleted)
};