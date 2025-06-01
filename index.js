function changeIdContent() {
  alert(
    "Changing content of the element with ID 'unique-element' using JavaScript!"
  );
  // Get the element by its ID
  uniqueElement = document.getElementById("unique-element");

  // Change its content
  if (uniqueElement) {
    uniqueElement.querySelector("p").textContent =
      "Content of the ID element has been changed by JavaScript!";
    uniqueElement.style.backgroundColor = "#ffebee"; // Change background with JS
    uniqueElement.style.borderColor = "#f44336"; // Change border with JS
  }
}

function changeClassContent() {
  // Get all elements with the class "common-elements"
  commonElements = document.getElementsByClassName("common-elements");

  // Loop through each element and change its content
  for (let i = 0; i < commonElements.length; i++) {
    commonElements[i].querySelector("p").textContent =
      "Content of a class element changed by JavaScript!";
    commonElements[i].style.backgroundColor = "#e3f2fd"; // Change background with JS
    commonElements[i].style.borderColor = "#2196F3"; // Change border with JS
  }
}
