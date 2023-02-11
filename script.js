function time() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (seconds < 10) seconds = "0" + seconds;
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  let hourElement = document.querySelector(".hour");
  hourElement.textContent = `${hour}:`;
  let minuteElement = document.querySelector(".minute");
  minuteElement.textContent = `${minute}:`;
  let secondsElement = document.querySelector(".second");
  secondsElement.textContent = `${seconds}`;
  let dayElement = document.querySelector(".day");
  dayElement.textContent = `${day}/`;
  let monthElement = document.querySelector(".month");
  monthElement.textContent = `${month}/`;
  let yearElement = document.querySelector(".year");
  yearElement.textContent = `${year}`;

  setTimeout("time()", 1000);
}
time();
