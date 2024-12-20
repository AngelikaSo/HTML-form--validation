import { validateFields, saveDataToLocalStorage } from "./processData.js";

const form = document.getElementById("form");

const fields = Array.from(form.elements)
  .filter((element) => element.type !== "submit")
  .map((element) => {
    const isRequired = element.classList.contains("required");
    const errorElementId = element.getAttribute("data-error-id");
    return {
      element: element,
      errorElement: errorElementId
        ? document.getElementById(errorElementId)
        : null,
      required: isRequired,
    };
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isValid = validateFields(...fields);
  if (isValid) {
    saveDataToLocalStorage(...fields);
    form.reset();
  }
});
