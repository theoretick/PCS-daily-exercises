$(document).ready(function() {

  $('button').on('click', function() {
    $('div.boxes').removeClass('bluebox');
  });

  $("div.boxes").on('click', function () {
    $(this).toggleClass('bluebox');

    if ($('div.boxes').not('.bluebox').length > 0) {
      $('div#congrats').hide();
    }
    else {
      $('div#congrats').show();
    };
    proximities($(this));
  });
});

var proximities = function(position) {
    // sets neighboring box based on pos of clicked box

    var row = parseInt(position.data('row'));
    var col = parseInt(position.data('col'));

    $("div[data-row="+(row-1)+"][data-col="+(col)+"]").toggleClass('bluebox');
    $("div[data-row="+(row+1)+"][data-col="+(col)+"]").toggleClass('bluebox');
    $("div[data-row="+(row)+"][data-col="+(col-1)+"]").toggleClass('bluebox');
    $("div[data-row="+(row)+"][data-col="+(col+1)+"]").toggleClass('bluebox');

};
