const username = document.getElementById("username");
const password = document.getElementById("password");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
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
    email.value
  );
  username.value = "";
  password.value = "";
  fname.value = "";
  lname.value = "";
  email.value = "";
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
  val5
) {
  localStorage.setItem(
    targetStorageItemName,
    JSON.stringify({
      [key1]: val1,
      [key2]: val2,
      [key3]: val3,
      [key4]: val4,
      [key5]: val5,
    })
  );
  console.log("new storage item saved");
}
