$(document).ready(function() {

  $('a').on('click', function() {
    $('div.boxes').removeClass('bluebox')
  });

  // $('div.boxes').on('click', function() {
  //   $(this).css('background-color', 'blue')
  // })

  $("div.boxes").on('click', function () {
    if ($(this).hasClass('bluebox') === true) {
      $(this).removeClass('bluebox');
    }
    else {
      $(this).addClass('bluebox');
    }
  });
});