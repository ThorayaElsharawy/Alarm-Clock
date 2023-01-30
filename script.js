// const selectMenu = document.querySelectorAll("select");
// const currentTime = document.querySelector("h1");
// const setAlarmBtn = document.querySelector("button");
// const content = document.querySelector(".content");

// let alarmTime,
//   isAlarmSet = false;
// ringTone = new Audio("./assets/ringtone.mp3");

// for (let i = 1; i <= 12; i++) {
//   i = i < 10 ? "0" + i : i;
//   let option = `<option value="${i}">${i}</option>`;
//   selectMenu[0].insertAdjacentHTML("beforeend", option);
// }

// for (let i = 59; i > 0; i--) {
//   i = i < 10 ? "0" + i : i;
//   let option = `<option value="${i}">${i}</option>`;
//   selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
// }

// for (let i = 2; i > 0; i--) {
//   let ampm = i == 1 ? "AM" : "PM";
//   let option = `<option value="${ampm}">${ampm}</option>`;
//   selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
// }

// setInterval(() => {
//   let date = new Date(),
//     h = date.getHours(),
//     m = date.getMinutes(),
//     s = date.getSeconds(),
//     ampm = "AM";

//   if (h >= 12) {
//     h = h - 12;
//     ampm = "PM";
//   }

//   h = h == 0 ? 12 : h;

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

//   if (alarmTime == `${h}:${m}:${ampm}`) {
//     ringTone.play();
//     ringTone.loop = true;
//   }
// }, 1000);

// function setAlarm() {
//   if (isAlarmSet) {
//     alarmTime = "";
//     ringTone.pause();
//     content.classList.remove("disable");
//     setAlarmBtn.innerText = "Set Alarm";
//     return (isAlarmSet = false);
//   }

//   let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;

//   if (
//     time.includes("Hour") ||
//     time.includes("Minute") ||
//     time.includes("AM/PM")
//   ) {
//     return alert("Please select vaild time to set Alarm");
//   }

//   content.classList.add("disable");
//   setAlarmBtn.innerText = "Clear Alarm";
//   isAlarmSet = true;
//   alarmTime = time;
// }

// setAlarmBtn.addEventListener("click", setAlarm);

const selectMenu = document.querySelectorAll("select");
const currnetTime = document.querySelector("h1");
const setAlarmBtn = document.querySelector("button");
const content = document.querySelector(".content");

let alarmTime;
let isAlarm = false;
let ringTone = new Audio("./assets/ringtone.mp3");

for (let i = 1; i <= 12; i++) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].insertAdjacentHTML("beforeend", option);
}

for (let i = 1; i <= 59; i++) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].insertAdjacentHTML("beforeend", option);
}

for (let i = 1; i <= 2; i++) {
  let ampm = i === 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].insertAdjacentHTML("beforeend", option);
}

setInterval(() => {
  let time = new Date();
  let ampm = "AM";
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  h = h === 0 ? 12 : h;

  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }

  currnetTime.innerText = `${h}:${m}:${s} ${ampm}`;

  if (alarmTime == `${h}:${m} ${ampm}`) {
    ringTone.play();
    ringTone.loop = true;
  }
}, 1);

function setAlarm() {
  if (isAlarm) {
    alarmTime = "";
    content.classList.remove("disable");
    setAlarmBtn.innerText = "Set Alarm";
    ringTone.pause();
    return (isAlarm = false);
  }

  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert("Please select vaild time to set Alarm");
  }

  content.classList.add("disable");
  setAlarmBtn.innerText = "Clear Alarm";
  isAlarm = true;
  alarmTime = time;
}

setAlarmBtn.addEventListener("click", setAlarm);
