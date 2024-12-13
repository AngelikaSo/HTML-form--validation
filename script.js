const username = document.getElementById("username");
const password = document.getElementById("password");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const form = document.getElementById("form");
const referralSource = document.getElementById("referral-source");
const message = document.getElementById("message");

const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const emailError = document.getElementById("email-error");

form.addEventListener("submit", (event) => {
  if (email.value === "" || email.value == null) {
    event.preventDefault();
    emailError.innerHTML = "Email is required!";
    email.style.border = "1px solid red";
  }

  if (username.value === "" || username.value == null) {
    event.preventDefault();
    usernameError.innerHTML = "Username is required!";
    username.style.border = "1px solid red";
  }

  if (password.value === "" || password.value == null) {
    event.preventDefault();
    passwordError.innerHTML = "Password is required!";
    password.style.border = "1px solid red";
  } else
    setLocalStorageItem(
      "userDetails",
      "username",
      username.value,
      "password",
      password.value,
      "fname",
      fname.value,
      "lname",
      lname.value,
      "email",
      email.value,
      "referral-source",
      referralSource.value,
      "message",
      message.value
    );
  username.value = "";
  password.value = "";
  fname.value = "";
  lname.value = "";
  email.value = "";
  referralSource.value = "Select";
  message.value = "";
});

function setLocalStorageItem(
  targetStorageItemName,
  key1,
  val1,
  key2,
  val2,
  key3,
  val3,
  key4,
  val4,
  key5,
  val5,
  key6,
  val6,
  key7,
  val7
) {
  localStorage.setItem(
    targetStorageItemName,
    JSON.stringify({
      [key1]: val1,
      [key2]: val2,
      [key3]: val3,
      [key4]: val4,
      [key5]: val5,
      [key6]: val6,
      [key7]: val7,
    })
  );
}
