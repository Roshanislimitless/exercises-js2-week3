//................BULLSHIT done by me.........................................................
// function setAlarm() {
//   var Initial = document.querySelector('#alarmSet').value;
//   setInterval(function Alarm() {
//     if (Initial > 0) {
//       Initial--
//     } else if (Initial === 0) {
//       playAlarm();
//        document.body.style.background = "red";
//     }


//     document.querySelector('#timeRemaining').innerHTML = "Time Remaining: 00:" + Initial;



//   }, 1000)
// }
//How jay did it..........practice..........................................................
var alarmSeconds;
var alarmInterval;
var milliSecPerSec = 1000;

function setAlarm() {
  var alarmInput = document.querySelector("#alarmSet");
  alarmSeconds = alarmInput.value;

  alarmInterval = setInterval(subtractAlarmSecond, milliSecPerSec);
}

function subtractAlarmSecond(){
  if(alarmSeconds > 0){
  alarmSeconds--;
  }
  displayTimeRemaining();
  if(alarmSeconds === 0){
    clearInterval(alarmInterval);
    playAlarm()
  }

}

function displayTimeRemaining(){
  var timeRemainingH1 = document.querySelector("#timeRemaining");
  var minutes = Math.floor(alarmSeconds / 60);
  var seconds = alarmSeconds - (minutes*60);
  var minutesString = '';

  if( minutes < 10 ){
    minutesString = '0' + minutes;
  }else {minutesString = minutes;}
  

  var secondString = '';  
  if ( seconds < 10){
    secondString = '0'  + seconds;
  }else { secondString = seconds;}

  timeRemainingH1.innerText = "Time remaining :" + minutesString + ":" + secondString;
  console.log(secondString);
  
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