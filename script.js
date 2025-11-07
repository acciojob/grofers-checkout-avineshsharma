function calculateTotal() {
  const priceElements = document.querySelectorAll('.price');
  let total = 0;

  priceElements.forEach(cell => {
    const value = parseFloat(cell.textContent);
    if (!isNaN(value)) total += value;
  });

  document.getElementById('ans').textContent = total;
}



