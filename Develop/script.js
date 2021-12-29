//logic for work day scheduler
//insert current time
window.setInterval(function () {
  $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}, 1000);