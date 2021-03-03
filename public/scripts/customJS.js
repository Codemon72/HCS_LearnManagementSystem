// Form Validation
const nameField = document.getElementById('name');
nameField.addEventListener('blur', () => {
  if (nameField.options[nameField.selectedIndex].value === ""){
    nameField.insertAdjacentHTML('afterend', '<span class="error-message">Please select a course name from the list.</span>');
  }
});
nameField.addEventListener('change', () => {
  console.log('success!')
  // if valid input add check mark and disappear error message
  // if invalid input && error-message exists -> do nothing
});

const hoursField = document.getElementById('hours');
hoursField.addEventListener('blur', () => {
  if (hoursField.value === ''){
    hoursField.insertAdjacentHTML("afterend", "<span class='error-message'>Please enter the sum of hours of the course.</span>");
  }
});