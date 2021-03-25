const displayUpdateUI = (id) => {
  const editDiv = document.getElementById('editCourse' + id)
  editDiv.classList.remove("inactive");
  editDiv.classList.add("active");
}