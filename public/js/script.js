var gifButton = $("#btnGifSubmit");
var searchedMuscle = $("#searchMuscle");
var formButton = $("registerBtn");

gifButton.on("click", function () {
  var userEventText = $(this).prev().text();
  console.log(searchedMuscle.text());
  console.log(userEventText);
});
