console.log('custom JS file connected');

// const testFunction = () => {
//   console.log('Success!')
// }

const nameField = document.getElementById('name');
nameField.addEventListener('blur', () => {
  console.log('Success!')
})

const myFunction = () => {
  alert("Input field lost focus.");
}

// module.exports = myFunction;