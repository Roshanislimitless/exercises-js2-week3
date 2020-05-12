//Write your code here
window.onload = setUpSlideShow;




document.querySelector('#myImage').style.height = '600px';
var array = ["https://stingynomads.com/wp-content/uploads/2019/04/Phewa-lake-Pokhara-800x530.jpg", "https://i.pinimg.com/originals/96/2b/e3/962be3de7c91629cb546382a7a763974.jpg", "https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5c1ba84d9683296129ab9346_places%20to%20visit%20in%20pokhara.jpg", "https://atravelinglife.com/wp-content/uploads/2015/05/Pokhara-Nepal-mountain.jpg"];
var AutoforwardInterval;
var autoBackwardInterval;

let imageIndex = 1;

function firstImage() {
    myImage.src = array[0];
}


function forwardFunction(){

var myImage = document.querySelector('#myImage');
imageIndex++
if (imageIndex === array.length) {
    imageIndex = 0;
}
myImage.src = array[imageIndex] ;
}

function backwardFunction() {
    var myImage = document.querySelector('#myImage');
        imageIndex--
    if(imageIndex <= 0){
        imageIndex = array.length - 1;
    }
    myImage.src = array[imageIndex]

}


function autoForwardFunction(){
   pauseFunction();
   AutoforwardInterval =  setInterval(forwardFunction,500);
}

function autoBackwardFunction(){
    pauseFunction();
    autoBackwardInterval = setInterval(backwardFunction, 500)
}
function pauseFunction(){
    clearInterval(AutoforwardInterval);
    clearInterval(autoBackwardInterval);
}

function setUpSlideShow(){
    var forward = document.querySelector('#forward');
    forward.addEventListener('click', forwardFunction);

    var backward = document.querySelector('#backward');
    backward.addEventListener('click', backwardFunction);

    var autoForward = document.querySelector('#autoForward');
    autoForward.addEventListener('click', autoForwardFunction);

    var autoBackward = document.querySelector('#autoBackward');
    autoBackward.addEventListener('click', autoBackwardFunction);

    var pause = document.querySelector('#pause');
    pause.addEventListener('click', pauseFunction);

    firstImage();
}





