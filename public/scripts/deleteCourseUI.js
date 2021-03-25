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

const deleteCourse = (id) => {
  window.location.replace(`/courses/delete/${id}`);
};

// TODO: call showDeleteConfirmation after deletion
const showDeleteConfirmation = (id) => {
  const divDeleteConfirm = document.getElementById("delete-confirmation");
  divDeleteConfirm.innerText = `Course with ID: ${id} was deleted!`;
  divDeleteConfirm.classList.remove("inactive");
  divDeleteConfirm.classList.add("active");
  setTimeout(() => {
    divDeleteConfirm.classList.remove("active");
    divDeleteConfirm.classList.add("inactive");
  }, 4000);
};

if (typeof requestID !== 'undefined'){
  showDeleteConfirmation(requestID)
}
