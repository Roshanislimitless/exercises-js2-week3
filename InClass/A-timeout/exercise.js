/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

// setTimeout(changeColor, 3000);

// function changeColor(){
//     document.body.style.background = "red";
// }


var colors =['green', 'white', 'blue', 'yellow', 'red'];
index = 0;
setInterval(changeColor, 500);

function changeColor(){
    index += 1;
    if( index === colors.length){
        index = 0;
    }
    
   document.body.style.background = colors[index];
}






//...............................using Math.random and Math.floor..........................
// function colorChange(){
//     var colors = ['green', 'white', 'blue'];
//     var length = colors.length;
//     var randomIndex = Math.floor(length * Math.random());
//     document.body.style.background = colors[randomIndex];
// }

// setInterval(colorChange, 500);












