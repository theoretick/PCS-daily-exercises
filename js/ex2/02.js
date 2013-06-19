$(document).ready(function() {

  $('a').on('click', function() {
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

    var row = $(this).data('row');
    var col = $(this).data('col');

    proximities($(this));

  }); // end of div.boxes click event handling

});


var proximities = function(position) {

    if (position.data('row')
    $("div[data-row="+(parseInt(row)-1)+"]").toggleClass('bluebox');
    $("div[data-row="+(parseInt(row)-1)+"]").toggleClass('bluebox');

    $("div.boxes[data-row="+col+"]").toggleClass('bluebox');


});