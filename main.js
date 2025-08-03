let reminderTime = null;
let alreadyNotified = false;

function setReminder() {
  const inputTime = document.getElementById("pillTime").value;
  if (!inputTime) {
    alert("กรุณาเลือกเวลา");
    return;
  }
  reminderTime = inputTime;
  alreadyNotified = false;
  document.getElementById("status").innerText = "ตั้งเวลาเรียบร้อย: " + reminderTime;
}

function checkTime() {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);

  if (reminderTime && currentTime === reminderTime && !alreadyNotified) {
    notifyUser();
    alreadyNotified = true;
  }
}

function notifyUser() {
  const audio = document.getElementById("alertSound");
  audio.play();
  document.getElementById("stopButton").style.display = "inline-block";
  alert("ถึงเวลาทานยาแล้ว!");
}

function stopAlarm() {
  const audio = document.getElementById("alertSound");
  audio.pause();
  audio.currentTime = 0;
  document.getElementById("stopButton").style.display = "none";
  document.getElementById("status").innerText = "แจ้งเตือนถูกปิดแล้ว";
}

setInterval(checkTime, 1000);