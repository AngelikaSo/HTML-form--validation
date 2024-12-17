const form = document.getElementById("form");
const feilds = [
  {
    element: document.getElementById("username"),
    errorElement: document.getElementById("username-error"),
    required: true,
  },
  {
    element: document.getElementById("password"),
    errorElement: document.getElementById("password-error"),
    required: true,
  },
  {
    element: document.getElementById("fname"),
    required: false,
  },
  {
    element: document.getElementById("lname"),
    required: false,
  },
  {
    element: document.getElementById("email"),
    errorElement: document.getElementById("email-error"),
    required: true,
  },
  {
    element: document.getElementById("referral-source"),
    required: false,
  },
  {
    element: document.getElementById("message"),
    required: false,
  },
];

form.addEventListener("submit", (event) => {
  let isValid = true;

  //Clean up previous errors first
  feilds.forEach((feild) => {
    if (feild.errorElement) {
      feild.errorElement.innerHTML = "";
      feild.element.style.border = "";
    }
  });

  // Validate content
  feilds.forEach((feild) => {
    if (
      feild.required &&
      (!feild.element.value || feild.element.value.trim() === "")
    ) {
      event.preventDefault();
      isValid = false;

      if (feild.errorElement) {
        feild.errorElement.innerHTML = `${feild.element.id} is required.`;
        feild.element.style.border = "1px solid red";
      }
    }
  });

  if (isValid) {
    const data = {};
    feilds.forEach((feild) => {
      data[feild.element.id] = feild.element.value;
    });

    localStorage.setItem("userDetails", JSON.stringify(data));
  }

  form.reset();
});
