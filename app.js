const start = document.getElementById("start");
const stop = document.getElementById("stop");
const body = document.getElementsByTagName("body");

// Start and Stop Event
start.addEventListener("click", bgStart);
stop.addEventListener("click", bgStop);

// Hex code generator
function colorGenerator() {
  let color = "#";
  const hex = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Background Change function
function bgChange() {
  document.body.style.backgroundColor = colorGenerator();
}

// Setting interval when clicked on Start Button
let interval;
function bgStart() {
  if (!interval) {
    interval = setInterval(bgChange, 1000);
  }
}

// Stops interval when clicked on Stop Button
function bgStop() {
  clearInterval(interval);
  interval = null;
}
