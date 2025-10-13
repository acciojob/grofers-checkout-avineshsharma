const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price elements
  const priceCells = document.querySelectorAll(".price");

  // Calculate total price
  let total = 0;
  priceCells.forEach((cell) => {
    total += Number(cell.textContent);
  });

  // Create a new table row and cell for total
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  // Span across both columns
  newCell.setAttribute("colspan", "2");
  newCell.textContent = `Total Price = Rs ${total}`;

  // Append cell to row, then row to table
  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


