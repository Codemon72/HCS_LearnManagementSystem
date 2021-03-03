const nameField = document.getElementById("name");
nameField.addEventListener("blur", () => {
  if (nameField.options[nameField.selectedIndex].value === ""){
    nameField.insertAdjacentHTML("afterend", "<span class='error-message'>Please select a course name from the list.</span>");
  }
});

const hoursField = document.getElementById("hours");
hoursField.addEventListener("blur", () => {
  if (hoursField.value === ""){
    hoursField.insertAdjacentHTML("afterend", "<span class='error-message'>Please enter the sum of hours of the course.</span>");
  }
});