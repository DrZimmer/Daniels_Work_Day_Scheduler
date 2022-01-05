//logic for work day scheduler
//insert current time
$('#currentDay').html(moment().format('MMMM Do YYYY'));

var currentTime = new Date().getHours();
console.log(currentTime);


var getStorage = function () {
  localStorage.getItem("") //retrieve each item from local storage
};

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
  
  var enterEvent = function () {
    //when click on middle section, able to enter text.
  };

  var saveBtn = function () {
    $(".save").on('click', function() {
      //do the set item here "when i was doing this homework, i used console and alert alot (edited) because i am trying to get value" -qing
    });
    //when i click on save, save to local storage
    localStorage.setItem("toDoText", JSON.stringify(something));
    $(this).parent() //something
  };

getStorage();
timeChange();