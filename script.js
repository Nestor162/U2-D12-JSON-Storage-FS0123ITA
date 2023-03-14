// Esercizio 1 = Registrazione username usando localStorage

const body = document.getElementsByTagName("body")[0];

window.addEventListener("DOMContentLoaded", () => {
  const btnSave = document.getElementById("save");
  btnSave.onclick = saveName;
  const btnRemove = document.getElementById("remove");
  btnRemove.onclick = removeName;

  const nameContainer = document.createElement("em");
  nameContainer.textContent = "Previous username: ";
  if (checkName()) {
    body.prepend(nameContainer);
    nameContainer.textContent += checkName();
  }
});

const saveName = () => {
  const inputName = document.getElementById("name").value;
  localStorage.setItem("username", inputName);
  document.getElementById("form-user").reset();

  nameUpdated();
};

const removeName = () => {
  if (checkName()) {
    localStorage.removeItem("username");
    const nameContainer = document.querySelector("em");
    nameContainer.textContent = "Name deleted!";
    nameContainer.classList.remove("green-text");
    nameContainer.classList.add("red-text");
  } else {
    alert("username does not exist");
  }
};

const checkName = () => {
  let usernameInStorage = localStorage.getItem("username");
  return usernameInStorage;
};

const nameUpdated = () => {
  if (checkName()) {
    const nameContainer = document.querySelector("em");
    nameContainer.textContent = "Name updated!";
    nameContainer.classList.remove("red-text");
    nameContainer.classList.add("green-text");
  }
};
