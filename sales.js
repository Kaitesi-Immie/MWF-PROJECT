document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("salesForm");
  const totalPreview = document.getElementById("totalPreview");
  const qtyInput = form.querySelector('input[placeholder="Quantity bought/sold"]');
  const priceInput = form.querySelector('input[placeholder="Price per unit"]');
  const transportSelect = document.getElementById("transportSelect");

  function calculateTotal() {
    const qty = Number(qtyInput.value) || 0;
    const price = Number(priceInput.value) || 0;
    const transport = transportSelect.value === "yes" ? 0.05 : 0;
    const total = qty * price * (1 + transport);
    totalPreview.textContent = `Total: $${total.toFixed(2)}`;
  }

  [qtyInput, priceInput, transportSelect].forEach(input => {
    input.addEventListener("input", calculateTotal);
    input.addEventListener("change", calculateTotal);
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const inputs = form.querySelectorAll("input, select");
    const saleData = Array.from(inputs).reduce((acc, input) => {
      acc[input.placeholder || input.id || input.name] = input.value;
      return acc;
    }, {});

    saleData.Total = totalPreview.textContent.split("$")[1];
    alert(`Sale recorded successfully!\nTotal: $${saleData.Total}`);
    form.reset();
    totalPreview.textContent = "Total: $0.00";
  });
});
