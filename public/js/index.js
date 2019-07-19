// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#shelterSubmit");
var $submitBtn2 = $("#animalSubmit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

function shelterSearchClick() {
  event.preventDefault();
  console.log("Clicked");
  var shelterState = $(shelterStateSearch).val();
  var shelterType = $(shelterTypeSearch).val();
  var shelterRating = $(shelterRatingSearch).val();
  console.log(shelterState);
  console.log(shelterType);
  console.log(shelterRating);

  var query = {
    state: shelterState,
    type: shelterType,
    rating: shelterRating
}
  console.log(query);
  // $.post("/api/shelterSearch", query)

  $.post("/api/shelterSearch", query);
    
  window.location = "/example";

}


function animalSearchClick() {
  event.preventDefault();
  console.log("Clicked");
  var animalSpecies = $(animalSpeciesSearch).val();
  var animalState = $(animalStateSearch).val();
  var animalGender = $(animalGenderSearch).val();
  var animalAge = $(animalAgeSearch).val();
  console.log(animalSpecies);
  console.log(animalState);
  console.log(animalGender);
  console.log(animalAge);

  var query = {
    species: animalSpecies,
    state: animalState,
    gender: animalGender,
    age: animalAge
  };

  $.post("/api/animalSearch", query, function(data){
    console.log(data);

    for (var i = 0; i < data.length; i++) {

      // var card = $("<div class='card' style='width: 18rem;'><img class='card-img-top' src=''...'' alt='Card image cap'><div class='card-body'><h5 class='card-title'>"
      // var card2 = "</h5><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href='#' class='btn btn-primary'>Favorite</a></div></div>";)
      var p = $("<p>");
      var p1 = p.text("Name: " + data[i].petName + " Type: " + data[i].petSpecies+ " Age: " + data[i].petAge +" Gender: " + data[i].petGender+ " State: " + data[i].petState);
      // var p2 = p.text("Type: " + data[i].petSpecies);
      // // var p3 = p.text("Age: " + data[i].petAge);
      // // var p4 = p.text("Gender: " + data[i].petGender);
      // // var p5 = p.text("State: " + data[i].petState);

      // var card = ($("<div class='card' style='width: 18rem;'><img class='card-img-top' src=''...'' alt='Card image cap'><div class='card-body'><h5 class='card-title'>")
      // var name = p.text("Name: " + data[i].petName);
      // var card2 = $("</h5><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href='#' class='btn btn-primary'>Favorite</a></div></div>";)


      $(".resultAnimals").append(p1);
    }

    
  // window.location = "/search/animals";
  });
  
}


$submitBtn.on("click", shelterSearchClick);
$submitBtn2.on("click", animalSearchClick);

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
