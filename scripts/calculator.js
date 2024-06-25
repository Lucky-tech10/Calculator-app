let calculation = localStorage.getItem("answer") || "";

// Display the calculation when the page loads.
displayCalculation();

function updateCalculation(value) {
  calculation += value;

  displayCalculation();
  localStorage.setItem("answer", calculation);
}

function displayCalculation() {
  document.querySelector(".js-display").innerHTML = calculation;
}
