export default function handleData(fields) {
  let isValid = true;

  fields.forEach((field) => {
    console.log(`Validating field: ${field.name}`);
    console.log(`Field value: ${field.input.value}`);

    if (field.required && !field.input.value.trim()) {
      isValid = false;
      if (field.errorElement) {
        field.errorElement.innerHTML = `${field.name} is required.`;
        field.input.style.border = "1px solid red";
      }
    } else {
      //Reset error if valid
      if (field.errorElement) {
        field.errorElement.innerHTML = "";
        field.input.style.border = "";
      }
    }
  });

  if (isValid) {
    const data = {};
    fields.forEach((field) => {
      data[field.input.id] = field.input.value;
    });

    console.log("Data to be saved:", data);
    localStorage.setItem("userDetails", JSON.stringify(data));
  }

  return isValid;
}
