let hour = document.getElementById("hh");
let min = document.getElementById("mm");
let sec = document.getElementById("ss");

setInterval(updateClock, 1000);
function updateClock() {
  let currentDate = new Date();
  let secRatio = currentDate.getSeconds() / 60;
  let minRatio = currentDate.getMinutes() / 60;
  let hourRatio = currentDate.getHours() / 12;

  setRotation(sec, secRatio);
  setRotation(min, minRatio);
  setRotation(hour, hourRatio);
}
function setRotation(e, rT) {
  e.style.setProperty("--rotation", rT * 360);
}
updateClock();
