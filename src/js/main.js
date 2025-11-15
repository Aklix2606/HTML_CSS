import { round } from "lodash-es";

const servingsInput = document.getElementById('servings-input');
const qtySpans = document.querySelectorAll('.qty');

function updateQuantities() {
  const target = Number(servingsInput.value) || 4;
  qtySpans.forEach(span => {
    const base = Number(span.dataset.base);
    const newValue = round(base * target / 4);
    span.textContent = newValue;
  });
}

servingsInput.addEventListener('input', updateQuantities);
updateQuantities();
