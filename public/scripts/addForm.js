// Form Validation

if (document.forms.length > 0){console.log('Form!')}

// if all input elements have received an input the submit button is enabled
const checkform = () => {
  const f = document.forms['add-form'].elements;
  let cansubmit = true;

  for (let i = 0; i < f.length; i++) {
    if (f[i].value.length == 0) cansubmit = false;
  }
  document.getElementById("AddSubmit").disabled = !cansubmit;
};

// Checks for every input element
const nameField = document.getElementById("name");

// if input field loses focus, input is not valid and there is not yet an error message -> add an error message
nameField.addEventListener("blur", () => {
  const errorText = document.querySelector("#name ~ span.error-message");
  if (nameField.options[nameField.selectedIndex].value === "" && !errorText) {
    nameField.insertAdjacentHTML(
      "afterend",
      '<span class="error-message">Please select a course name from the list.</span>'
    );
  }
});

// if input is changed, valid and there is already an error message -> remove error message
nameField.addEventListener("change", () => {
  const errorText = document.querySelector("#name ~ span.error-message");
  if (nameField.options[nameField.selectedIndex].value !== "" && errorText) {
    errorText.remove();
  }
  checkform()
});

const hoursField = document.getElementById("hours");

hoursField.addEventListener("blur", () => {
  const errorText = document.querySelector("#hours ~ span.error-message");
  if (hoursField.value === "" && !errorText) {
    hoursField.insertAdjacentHTML(
      "afterend",
      "<span class='error-message'>Please enter the sum of hours of the course.</span>"
    );
  }
});

hoursField.addEventListener("input", () => {
  const errorText = document.querySelector("#hours ~ span.error-message");
  if (hoursField.value !== "" && errorText) {
    errorText.remove();
  }
  checkform()
});

const start_dateField = document.getElementById("start_date");

start_dateField.addEventListener("blur", () => {
  const errorText = document.querySelector("#start_date ~ span.error-message");
  if (start_dateField.value === "" && !errorText) {
    start_dateField.insertAdjacentHTML(
      "afterend",
      "<span class='error-message'>Please select the start date for the course.</span>"
    );
  }
});
start_dateField.addEventListener("input", () => {
  const errorText = document.querySelector("#start_date ~ span.error-message");
  if (start_dateField.value !== "" && errorText) {
    errorText.remove();
  }
  checkform()
});

const end_dateField = document.getElementById("end_date");

end_dateField.addEventListener("blur", () => {
  const errorText = document.querySelector("#end_date ~ span.error-message");
  if (end_dateField.value === "" && !errorText) {
    end_dateField.insertAdjacentHTML(
      "afterend",
      "<span class='error-message'>Please select the end date for the course.</span>"
    );
  }
});

end_dateField.addEventListener("input", () => {
  const errorText = document.querySelector("#end_date ~ span.error-message");
  if (end_dateField.value !== "" && errorText) {
    errorText.remove();
  }
  checkform()
});

const teacher_idField = document.getElementById("teacher_id");

teacher_idField.addEventListener("blur", () => {
  const errorText = document.querySelector("#teacher_id ~ span.error-message");
  if (
    teacher_idField.options[teacher_idField.selectedIndex].value === "" &&
    !errorText
  ) {
    teacher_idField.insertAdjacentHTML(
      "afterend",
      '<span class="error-message">Please select a course teacher_id from the list.</span>'
    );
  }
});

teacher_idField.addEventListener("change", () => {
  const errorText = document.querySelector("#teacher_id ~ span.error-message");
  if (
    teacher_idField.options[teacher_idField.selectedIndex].value !== "" &&
    errorText
  ) {
    errorText.remove();
  }
  checkform()
});
