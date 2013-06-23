$(document).ready(function() {

  $('button#wipe').on('click', wipe);
  $('button#reset').on('click', reset);

  // add/change color on boxes
  $(".container-fluid").on('click', '.boxes', function () {
    colorClicked($(this));
    // colorNeighbors($(this));
    addHoriz($(this));
    addVert($(this));
  });
});

// button for wipe
var wipe = function() {

  $('div.boxes').removeClass('bluebox redbox');
};

// button for reset
var reset = function() {
  $('div.generated').remove();
  wipe();
};

var colorClicked = function(position) {
  if (!position.hasClass('bluebox') && !position.hasClass('redbox')) {
    position.toggleClass('bluebox');
  }
  else if (!position.hasClass('bluebox redbox') {
    position.toggleClass(
  };
};

var colorNeighbors = function(position) {

  else if (position.hasClass('redbox')) {
    // position.toggleClass('bluebox');
    // position.toggleClass('redbox');
  }
  else {
    position.toggleClass('bluebox');
  }

};

var addHoriz = function(position) {

  col = parseInt(position.data('col'), 10);
  // col = position.index();

  if ((position.index() + 1) === position.parent().children().length) {
    // position is last element, append one to the right
    var leftBox = position.clone().addClass('generated').attr('data-col',col + 1);
    position.after(leftBox);
  }
  else if (position.index() === 0) {
    // if first item in row, add item before it.
    var rightBox = position.clone().addClass('generated').attr('data-col',col - 1);
    position.before(rightBox);
  };
};

var addVert = function(position) {

  row = parseInt(position.parent().data('row'), 10);

  if ($('div[data-row=' + (row + 1) + ']').children().length === 0) {
    // if no row above, add row

    var upRow = position.parent().clone().attr('data-row',row + 1)
        .addClass('generated');
    // fixes classes for children
    upRow.children().addClass('generated').removeClass('bluebox redbox');
    position.parent().before(upRow);
  }
  else if ($('div[data-row=' + (row + 1) + ']').children().length < position.siblings().length) {
    // if row above is shorter, add box to row above
    position.parent().prev().append(position.clone());
  };

  if ($('div[data-row=' + (row + -1) + ']').length === 0) {
    // if no row below, add row
    var downRow = position.parent().clone().attr('data-row',row - 1)
        .addClass('generated');
    // fixes classes for children
    downRow.children().addClass('generated').removeClass('bluebox redbox');

    position.parent().after(downRow);
  }
  else if ($('div[data-row=' + (row - 1) + ']').children().length < position.siblings().length) {
    // if row below is shorter, add box to row above
    position.parent().next().append(position.clone());
  };
};
