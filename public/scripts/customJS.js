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

const start_dateField = document.getElementById('start_date');

start_dateField.addEventListener('blur', () => {
  if (start_dateField.value === ''){
    start_dateField.insertAdjacentHTML("afterend", "<span class='error-message'>Please select the start date for the course.</span>")
  }
});
start_dateField.addEventListener('input', () => {
  const errorText = document.querySelector('#start_date ~ span.error-message');
  if (start_dateField.value !== '' && errorText) {
    errorText.remove()
  }
});

const end_dateField = document.getElementById('end_date');

end_dateField.addEventListener('blur', () => {
  if (end_dateField.value === ''){
    end_dateField.insertAdjacentHTML("afterend", "<span class='error-message'>Please select the start date for the course.</span>")
  }
});
end_dateField.addEventListener('input', () => {
  const errorText = document.querySelector('#end_date ~ span.error-message');
  if (end_dateField.value !== '' && errorText) {
    errorText.remove()
  }
});