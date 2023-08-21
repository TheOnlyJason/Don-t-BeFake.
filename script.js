const scheduleContainer = document.querySelector('.schedule');

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 25; j++) { // Adjust the loop for the number of time slots
    const scheduleCell = document.createElement('span');
    scheduleCell.classList.add('cell');
    scheduleContainer.appendChild(scheduleCell);


  }
}

document.getElementById("page2Button").addEventListener("click", function() {
  document.body.classList.add("hidden");
  setTimeout(function() {
    window.location.href = "index.html";
  }, 500);
})









function changeColor(element) {
    element.classList.toggle('clicked');
  }


