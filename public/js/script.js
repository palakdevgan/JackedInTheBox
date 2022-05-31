var gifButton = $("#btnGifSubmit");
var searchedMuscle = $("#searchMuscle");
var nameOfUser = $("name");
var lastName = $("lastname");
var emailOfUser = $("email");
var formButton = $("registerBtn");

gifButton.on("click", function () {
  var userEventText = $(this).prev().text();
  console.log(searchedMuscle.text());

  console.log(userEventText);
});

formButton.on("");
