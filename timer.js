// Esercizio 2 = Creazione contatore usando sessionStorage
let seconds = 0;
let minutes = 0;
let hours = 0;

window.onload = () => {
  checkSessionStorage();
  let timer = setInterval(function () {
    let currentTime = hours + " : " + minutes + " : " + seconds;
    sessionStorage.setItem("currentTime", currentTime);
    document.getElementById("timer").textContent = currentTime;

    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }, 1000);
};

const checkSessionStorage = () => {
  const currentTime = sessionStorage.getItem("currentTime");
  if (currentTime) {
    const timeParts = currentTime.split(" : ");
    hours = parseInt(timeParts[0]);
    minutes = parseInt(timeParts[1]);
    seconds = parseInt(timeParts[2]);
  }
};
