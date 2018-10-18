// A $( document ).ready() block.

$( document ).ready(function() {
    console.log( "ready!" );
});

// ### Instructions

// 1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
var animals = ["cat", "rabbit", "iguana", "dog"]; 

//    * We chose animals for our theme, but you can make a list to your own liking.

// 2. Your app should take the topics in this array and create buttons in your HTML.

      // displayMovieInfo function re-renders the HTML to display the appropriate content
    // Example queryURL for Giphy API


    function displayAnimalInfo() {
        
        var animal = $(this).attr("data-name");
        console.log(animal);
           var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&api_key=dbMP9MOOEOhD6pq8QJJheItL8BCYz6cH";
           // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "rabbit" + "&limit=5&api_key=dc6zaTOxFJmzC";
        
        console.log('in the ajax function');
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
  

    // Creating a div to hold the animal
    var animalChoiceDiv = $("<div class='animalChoiceDiv'>");

for (let index = 0; index < 10; index++) {

    // Storing the rating data
          var rating = response.data[index].rating;
            console.log("rating is " + rating);
          // Creating an element to have the rating displayed
          var pOne = $("<p>").text("Rating: " + rating);

          // Displaying the rating
          animalChoiceDiv.append(pOne);

          // Retrieving the URL for the image (animated and still)
          var imgURL = response.data[index].images.fixed_height_still.url;
          var imgStill = response.data[index].images.fixed_height_still.url;
          var imgAnimate = response.data[index].images.fixed_height.url; 

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);
    
            
          // add new attributes and a class to the elements so that I can animate latter when clicked
          image.attr('data-still', imgStill);
          image.attr('data-animate', imgAnimate);
          image.attr('data-state',"still");
          image.addClass('gif');

          // Appending the image
          animalChoiceDiv.append(image);

          // Putting the entire movie above the previous movies
          $("#giphy-view").prepend(animalChoiceDiv);
}

    });
    }

    // Function for displaying movie data
    function renderButtons() {

// Deleting the animals prior to adding new animals
// (this is necessary otherwise you will have repeat buttons)
$("#buttons-view").empty();

// Looping through the array of movies
for (var i = 0; i < animals.length; i++) {

  // Then dynamicaly generating buttons for each movie in the array
  // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
  var a = $('<button class="btn btn-info">');
  // Adding a class of movie-btn to our button
  a.addClass("animal-btn");
  // Adding a data-attribute
  a.attr("data-name", animals[i]);
  // Providing the initial button text
  a.text(animals[i]);
  // Adding the button to the buttons-view div
  $("#buttons-view").prepend(a);
}
}

   // This function handles events where a movie button is clicked
   $("#add-gif").on("click", function(event) {
       
        event.preventDefault();
        // This line grabs the input from the textbox
        var choice = $("#giphy-input").val().trim();

        // Adding movie from the textbox to our array
        animals.push(choice);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
     });

      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", ".animal-btn", displayAnimalInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
    // displayAnimalInfo();
//    * Try using a loop that appends a button for each string in the array.

// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
$(document).on("click", ".gif", imageChangeState);

function imageChangeState(){
    console.log("inside the gif click function");

console.log("inside the gif click function");

var state = $(this).attr("data-state");
console.log(state);


if(state == "still"){
  $(this).attr("src", $(this).attr("data-animate"));
  $(this).attr("data-state", "animate");
  console.log(state)
}
else {
  $(this).attr("src", $(this).attr("data-still"));
  $(this).attr("data-state", "still");

}

};

// 5. Under every gif, display its rating (PG, G, so on).
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// 7. Deploy your assignment to Github Pages.

// 8. **Rejoice**! You just made something really cool.


