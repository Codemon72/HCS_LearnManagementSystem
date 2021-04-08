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
  const divUpdateConfirm = document.getElementById("update-confirmation");
  divUpdateConfirm.innerText = `Course with ID: ${course_id} was updated!`;
  divUpdateConfirm.classList.remove("inactive");
  divUpdateConfirm.classList.add("active");
  setTimeout(() => {
    divUpdateConfirm.classList.remove("active");
    divUpdateConfirm.classList.add("inactive");
  }, 4000);
};

// check URL for the ID of an updated course
const idUpdated = new URLSearchParams(window.location.search).get('updated');

if (idUpdated) {
  showUpdateConfirmation(idUpdated)
};


const idUpdatedX = window.location.href.split('#')[1];

if (idUpdatedX) { 
  const divUpdateConfirm = document.getElementById(idUpdatedX);
  const confirmationSpan = document.createElement('span');
  confirmationSpan.className = 'update-confirmation';
  confirmationSpan.innerText = 'Course was updated 👍';
  divUpdateConfirm.appendChild(confirmationSpan);
  console.log(divUpdateConfirm)
}