export function validateFields(...fields) {
  let isValid = true;

  // Clear previous errors
  fields.forEach((field) => {
    if (field.errorElement) {
      field.errorElement.innerHTML = "";
      field.element.style.border = "";
    }
  });

  // Validate each field
  fields.forEach((field) => {
    if (
      field.required &&
      (!field.element.value || field.element.value.trim() === "")
    ) {
      isValid = false;

      // Show error for the required field
      if (field.errorElement) {
        field.errorElement.innerHTML = `${field.element.id} is required.`;
        field.element.style.border = "1px solid red";
      }
    }
  });

  return isValid;
}

export function saveDataToLocalStorage(...fields) {
  const data = {};
  fields.forEach((field) => {
    data[field.element.id] = field.element.value;
  });

  localStorage.setItem("userDetails", JSON.stringify(data));
}
