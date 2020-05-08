/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

// Task 2
// Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
// Create a new function called "addMovie"
// - it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
// - it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
// Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
// How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks


================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];


// function createMovieList(){
//   var allMoviesDiv = document.querySelector('#all-movies');
//   allMoviesDiv.innerHTML = "";
//   for( i = 0; i < movies.length; i++){
//     var p = document.createElement('p');
//     p.innerText = movies[i].title + " by " + movies[i].director;
//     allMoviesDiv.appendChild(p);
    



//   }
//   document.querySelector("#movies-number").innerHTML = movies.length;
// }

// // create a new movie object for your favorite movie

// //task 2
// // Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
// // Create a new function called "addMovie"
// // - it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
// // - it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
// // Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
// // How many movies can you see on your page?

var myMovies = {
  title: "Hobbit, battle of five armies",
  director: "akash sapkota",
  type: "Greek-mythology",
  haveWatched: "many times"
}
var myMovies1 = {
  title: "Limitless",
  director: "myself",
  type: "mylife",
  haveWatched: "daily"
}



function addMovies(movie){
movies.push(movie);
   
}




function showMovies() {
  var allMoviesDiv = document.querySelector("#all-movies");
  allMoviesDiv.innerHTML = "";
  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    var pElement = document.createElement("p");
    pElement.innerText = movie.title + " by " + movie.director;
    allMoviesDiv.appendChild(pElement);
  }
  var moviesNumber = document.querySelector("#movies-number");
  moviesNumber.innerHTML = movies.length; 

}

addMovies(myMovies1);
showMovies();

// setTimeout(function finalAdd() {
//   addMovies(myMovies);
//   showMovies();

// }, 2000);

// setTimeout(function finalAdd() {
//   addMovies(myMovies1);
//   showMovies();

// }, 4000);

// Task 4
// Create a form anywhere on your page.The form should have -
//   4 input text fields, one
// for each property of your movie object -
//   a "save"
// button.
// When the button is clicked
//   -
//   The field values should be used to create a new movie object literal -
//   The new movie is then added to the list of movies and gets displayed on your page
// TIP: Use the functions you created on tasks 1 - 3










var button = document.querySelector('button');
button.addEventListener('click', final );

function final (event){
  getValues();
  showMovies();
  event.preventDefault()

}

function getValues( ){
  var movieName = document.querySelector("#movieName");
  var director = document.querySelector("#director");
  var type = document.querySelector("#type");
  var haveWatched = document.querySelector("#haveWatched");
  var myMovies3 = {
    title: movieName.value,
    director: director.value,
    type: type.value,
    haveWatched: haveWatched.value
  }
  movies.push(myMovies3);


}






 









 
