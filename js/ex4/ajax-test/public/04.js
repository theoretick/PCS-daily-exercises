$(document).ready(function() {

  $('button').on('click', function() {
    $('div.boxes').removeClass('bluebox');
  });

  $("div.boxes").on('click', function () {
    $(this).toggleClass('bluebox');
    proximities($(this));
  });

  $.ajax({
    dataType: "json", // required
    url: "http://bstshk-replacement.herokuapp.com/?callback=?&screen_name=theoretick",
    error:function(){
      console.log('FAIL');
    },
    success:function(data){
      $(data).each(function(k,v) {
          $('#empty').after($('<p>'+v.text+'</p>'));
          console.log(v.text);
      });
    }
  });

});

var proximities = function(position) {
  // sets neighboring box based on pos of clicked box

  var row = parseInt(position.data('row'));
  var col = parseInt(position.data('col'));

  var up = row + 1;
  var down = row - 1;
  var left = col - 1;
  var right = col + 1;


  $("div[data-row="+down+"][data-col="+col+"]").toggleClass('bluebox');
  $("div[data-row="+up+"][data-col="+col+"]").toggleClass('bluebox');
  $("div[data-row="+row+"][data-col="+left+"]").toggleClass('bluebox');
  $("div[data-row="+row+"][data-col="+right+"]").toggleClass('bluebox');

};
