// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(document).ready(function () {
  //using day.js, display current day at top of page
  var today = dayjs();
  var currentDay = $("#currentDay");
  $(currentDay).text(today.format("dddd, MMMM D"));

  //using day.js, log current hour (in 24-hour time) in global variable
  var currentTime = dayjs().hour();
  // console.log(currentTime);

  //global variable for save button
  var saveButton = $(".saveBtn");
  // console.log(saveButton);

  //function to loop through each instance of class time-block. Use parsInt to convert each id into an integer value. Compare this variable with the currentTime from day.js, add and remove classes based on result.
  $(".time-block").each(function () {
    var hourBlock = parseInt($(this).attr("id"));

    if (hourBlock === currentTime) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (hourBlock < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  });

  //event listener for click events on the save button
  //value of 'this' is a reference to the element (saveButton)
  //uses id in containing time-block as key
  saveButton.on("click", function () {
    var hourInDay = $(this).parent().attr("id");
    var eventEntry = $(this).siblings(".description").val();
    localStorage.setItem(hourInDay, eventEntry);
    alert("Appointment successfully added to localStorage.");
  });

  //localStorage.getItem to retrieve events that have been saved to specific hour blocks
  //refresh page, saved event persists
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
});
