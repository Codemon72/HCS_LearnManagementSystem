// Form Validation
const nameField = document.getElementById('name');
nameField.addEventListener('blur', () => {
  if (nameField.options[nameField.selectedIndex].value === ""){
    nameField.insertAdjacentHTML('afterend', '<span class="error-message">Please select a course name from the list.</span>');
  }
});
nameField.addEventListener('change', () => {
  const errorText = document.querySelector('#name ~ span.error-message');
  // if input is valid remove error message
  if (nameField.options[nameField.selectedIndex].value !== "" && errorText){
    errorText.remove()
  }
});

const hoursField = document.getElementById('hours');

hoursField.addEventListener('blur', () => {
  if (hoursField.value === ''){
    hoursField.insertAdjacentHTML("afterend", "<span class='error-message'>Please enter the sum of hours of the course.</span>");
  }
});

hoursField.addEventListener('input', () => {
  const errorText = document.querySelector('#hours ~ span.error-message');
  // if input is valid remove error message
  if (hoursField.value !== "" && errorText){
    errorText.remove()
  }
});