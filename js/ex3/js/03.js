$(document).ready(function() {

  $('button#wipe').on('click', wipe);

  $('button#reset').on('click', reset);

  // add/change color on boxes
  $(".container").on('click', '.boxes', function () {
    if ($(this).hasClass('redbox') || $(this).hasClass('bluebox')) {
      $(this).toggleClass('bluebox');
      $(this).toggleClass('redbox');
    }
    else {
      $(this).toggleClass('bluebox');
    }
    addVert($(this));
    addHoriz($(this));
  });
});

// button for wipe
var wipe = function() {
  $('div.boxes').removeClass('bluebox');
  $('div.boxes').removeClass('redbox');
};

// button for reset
var reset = function() {
  $('div.generated').remove();
  wipe();
};

var addHoriz = function(position) {
    // sets neighboring box based on pos of clicked box

  var newBox = $('<div class="boxes generated"></div>');

  newBox.insertAfter(position);
  newBox.insertBefore(position);

  // parseInt(position.data('row'))
  // attr('data-row',row);

    // var row = parseInt(position.data('row'));
    // var col = parseInt(position.data('col'));
};

var addVert = function(position) {
  var newRow = $('<div class="row generated"><div class="boxes generated"></div></div>');
  newRow.attr('data-row',row = row + 1)

  newRow.insertAfter(position.parent());
  newRow.insertBefore(position.parent());

  // $("div[data-row="+(row-1)+"][data-col="+(col)+"]").toggleClass('bluebox');
  // $("div[data-row="+(row+1)+"][data-col="+(col)+"]").toggleClass('bluebox');
  // $("div[data-row="+(row)+"][data-col="+(col-1)+"]").toggleClass('bluebox');
  // $("div[data-row="+(row)+"][data-col="+(col+1)+"]").toggleClass('bluebox');

};
