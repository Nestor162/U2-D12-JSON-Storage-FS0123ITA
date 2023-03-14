const body = document.getElementsByTagName("body")[0];

window.addEventListener("DOMContentLoaded", () => {
  const btnSave = document.getElementById("save");
  btnSave.onclick = saveName;
  const btnRemove = document.getElementById("remove");
  btnRemove.onclick = removeName;
});

const saveName = () => {
  const inputName = document.getElementById("name").value;
  localStorage.setItem("username", inputName);
  document.getElementById("form-user").reset();
};

const removeName = () => {
  if (checkName()) {
    localStorage.removeItem("username");
  } else {
    alert("username does not exist");
  }
};

const checkName = () => {
  let usernameInStorage = localStorage.getItem("username");
  return usernameInStorage;
};

window.onload = () => {
  const nameContainer = document.createElement("div");
  nameContainer.textContent = "Previous username: ";
  if (checkName()) {
    body.prepend(nameContainer);
    nameContainer.textContent += checkName();
  }
};
