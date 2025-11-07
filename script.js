// Select all price cells
const priceElements = document.querySelectorAll('.prices');

let total = 0;

// Loop through each price cell and add its value to total
priceElements.forEach(priceCell => {
  total += parseFloat(priceCell.textContent); // convert string to number
});

// Create a new row and a single cell
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');

// Make the total cell span across both columns (optional)
totalCell.colSpan = 2;
totalCell.textContent = `Total Price: ₹${total}`;

// Add the cell to the row
totalRow.appendChild(totalCell);

// Append the row to the table
const table = document.getElementById('grocery-table');
table.appendChild(totalRow);



