import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const servingsInput = document.getElementById('servings-input');
const qtySpans = document.querySelectorAll('.qty');

function updateQuantities() {
  const target = Number(servingsInput.value) || 4;
  qtySpans.forEach(span => {
    const base = Number(span.dataset.base);
    const newValue = base * target / 4;
    span.textContent = newValue;
  });
}

servingsInput.addEventListener('input', updateQuantities);
updateQuantities();
