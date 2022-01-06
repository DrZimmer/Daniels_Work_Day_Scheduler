//logic for work day scheduler
//insert current date with moment.js
$('#currentDay').html(moment().format('MMMM Do YYYY'));

//setting a value equal to the current hour
var currentTime = new Date().getHours();
console.log(currentTime);

//function to change the color of time block depending on past/present/future
var timeChange = function () {
  $('.time-block').each(function() {
    let timeBlock =  parseInt($(this).attr('id').split('-')[1]);
    if (timeBlock < currentTime) {
      $(this).addClass("past")
    } else if (timeBlock === currentTime) {
      $(this).addClass("present")
    } else if (timeBlock > currentTime) {
      $(this).addClass("future")
    }});
  };

//save button saving text area to local storage
  $(document).ready(function () {
    $(".saveBtn").on("click", function () {
      let hour = $(this).parent().attr("id");
      let description = $(this).parent().children("textarea").val();
      console.log(description);
      //save hour and description to local storage
      localStorage.setItem(hour, description);
    });
  });

//retrieve each hours text content from local storage
function getLocalStorage () {
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  // localStorage.getItem(hour, description); 
};

timeChange();
getLocalStorage();