const date = new Date();
let hrs = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// initial time
// console.log(hrs + " : " + minutes + " : " + seconds);

let counter = 1;
updateTimer = () => {
  if (hrs >= 12) {
    console.log(hrs + " : " + minutes + " : " + seconds + " PM");
  } else {
    console.log(hrs + " : " + minutes + " : " + seconds + " AM");
  }
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hrs++;
    minutes = 0;
  }
};

const interval = setInterval(updateTimer, 1000);
