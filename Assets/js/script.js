// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(document).ready(function () {
  //using day.js, display current day at top of page
  var today = dayjs();
  var currentDay = $("#currentDay");
  $(currentDay).text(today.format("dddd, MMMM D"));

  //using day.js, log current hour (in 24-hour time) in global variable
  var currentTime = dayjs().hour();
  // console.log(currentTime);

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

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
