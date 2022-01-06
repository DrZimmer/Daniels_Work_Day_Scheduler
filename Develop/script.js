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
      const hour = $(this).parent().attr("id");
      const description = $(this).parent().children("textarea").val();
      console.log(description);
      //save hour and description to local storage
      localStorage.setItem(hour, description);
    });
  });

  // var loadTasks = function() {
  //   tasks = JSON.parse(localStorage.getItem("tasks"));
  
  //   // if nothing in localStorage, create a new object to track all task status arrays
  //   if (!tasks) {
  //     tasks = {
  //       toDo: [],
  //       inProgress: [],
  //       inReview: [],
  //       done: []
  //     };
  //   }
  //   var taskP = $("<p>")
  //   .addClass("m-1")
  //   .text(taskText);
  
  //   // loop over object properties
  //   $.each(tasks, function(list, arr) {
  //     // then loop over sub-array
  //     arr.forEach(function(task) {
  //       createTask(task.text, task.date, list);
  //     });
  //   });
  // };

//retrieve each hours text content from local storage
var loadStorage = function () {
  localStorage.getItem(hour, description); 
  $('.description')
  .text(description);
};

timeChange();
loadStorage();