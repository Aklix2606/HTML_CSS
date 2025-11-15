import { debounce, round } from "lodash-es";

const handleInput = debounce(() => {
  const people = Number(input.value);
  document.querySelectorAll("[data-base]").forEach((el) => {
    const base = Number(el.dataset.base);
    el.textContent = round(base * (people / 4), 2);
  });
}, 300);

input.addEventListener("input", handleInput);

