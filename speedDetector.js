const form = document.querySelector('form');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting
  const speed = parseInt(document.getElementById('speed').value); // get the speed input value
  let points = 0; // initialize points to 0
  
  if (speed <= 70) {
    output.textContent = 'Ok'; // print 'Ok' if the speed is less than or equal to 70
  } else {
    points = Math.floor((speed - 70) / 5); // calculate the demerit points based on the speed
    if (points > 12) {
      output.textContent = 'License suspended'; // print 'License suspended' if the driver gets more than 12 points
    } else {
      output.textContent = 'Points: ' + points; // print the total number of demerit points
    }
  }
});