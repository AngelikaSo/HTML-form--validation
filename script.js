import handleData from "./handle-data.js";

const form = document.getElementById("form");
const errorElements = document.getElementsByClassName("validation-error");

const fields = Array.from(form.elements).map((input, index) => ({
  id: input.id,
  name: input.name,
  label: input.label,
  type: input.type,
  input: input,
  errorElement: errorElements[index] || null,
  required: input.title !== "",
}));

form.addEventListener("submit", (event) => {
  console.log("Form submitted!");
  event.preventDefault();

  let isValid = handleData(fields);

  if (isValid) {
    form.reset();
  }
});
