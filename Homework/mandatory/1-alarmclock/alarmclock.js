
function setAlarm() {
  var Initial = document.querySelector('#alarmSet').value;
  setInterval(function Alarm() {
    if (Initial > 0) {
      Initial--
    } else if (Initial === 0) {
      playAlarm();
       document.body.style.background = "red";
    }


    document.querySelector('#timeRemaining').innerHTML = "Time Remaining: 00:" + Initial;



  }, 1000)
}




// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;