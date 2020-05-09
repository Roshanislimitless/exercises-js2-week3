//Write your code here




var forward = document.querySelector('#forward');
var backward = document.querySelector('#backward');
var autoForward = document.querySelector('#autoForward');
var buttonsDiv = document.querySelector('buttons');



var array = ["https://stingynomads.com/wp-content/uploads/2019/04/Phewa-lake-Pokhara-800x530.jpg", "https://i.pinimg.com/originals/96/2b/e3/962be3de7c91629cb546382a7a763974.jpg", "https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5c1ba84d9683296129ab9346_places%20to%20visit%20in%20pokhara.jpg", "https://atravelinglife.com/wp-content/uploads/2015/05/Pokhara-Nepal-mountain.jpg"];

    let imageIndex = 1;
function firstImage() {
    myImage.src = array[0];
}
firstImage();

function forwardFunction(){

var myImage = document.querySelector('#myImage');
imageIndex++
if (imageIndex === array.length) {
    imageIndex = 0;
}
myImage.src = array[imageIndex] ;



}

// function backwardFunction() {
//     var myImage = document.querySelector('#myImage');
//     myImage.src = array[imageIndex];
//     imageIndex--
//     if (imageIndex === 0) {
//         imageIndex = array.length ;
//     }

// }


forward.addEventListener('click', forwardFunction);
// backward.addEventListener('click', backwardFunction);


function autoForwardFunction(){
    setInterval(forwardFunction,500)
}

autoForward.addEventListener('click', autoForwardFunction);




