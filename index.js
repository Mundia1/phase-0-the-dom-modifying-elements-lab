// Step 1: Remove the <main> element
const mainElement = document.getElementById("main");
mainElement.remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Set the id of the <h1> element to "victory"
newHeader.id = "victory";

// Step 4: Set the text content of the <h1> element
newHeader.textContent = "Anderson Waithaka is the champion"; // Replace with your name

// Step 5: Append the <h1> element to the document body
document.body.appendChild(newHeader);
