//logic for work day scheduler
//insert current time
$('#currentDay').html(moment().format('MMMM Do YYYY'));

var currentTime = new Date().getHours();
console.log(currentTime);

var saveBtn = function () {
  //when i click on save, save to local storage
  localStorage.setItem("toDoText", JSON.stringify(tasks));
};

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
  // if (currentTime >= ) {
  //   $(this).addClass
  // } else if ()
};

timeChange();