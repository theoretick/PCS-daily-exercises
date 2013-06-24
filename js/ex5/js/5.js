//  special js stuff!!

var addLoremFuckingIpsum = function() {
  var $loremPara = $('<div class="span4">Lorem ipsum dolor sit amet,\
   consectetur adipisicing elit. Et, cumque consequuntur provident\
   nostrum hic dolorem. Commodi, consectetur odit quia fugit ratione\
   minima dolor harum non dolorem maiores! Consequuntur, magnam natus.\
   </div>');

  for (var i=0; i < 3; i++){
    $loremPara.clone().appendTo($('.content'));
  }
};

//////////////////////////////////////////////////////////////////////

// homeActive applies 'active' class on doc ready
var homeActive = function() {
  $('#homenav').addClass('active');
};

// activeTransfer removes and applies 'active' class to focused link
var activeTransfer = function(){
  $('.navbar-inner').on('click', 'li', function(){
    $('li.active').removeAttr({class:'active'});
    $(this).addClass('active');
  });
};

var dropdownTransfer = function() {
  $('li');
};

var bootModal = function() {
   var $modelOverlay =
   $('<a href="#myModal" role="button" class="btn" data-toggle="modal">\
    Big ol\' fashun buttin</a>\
      <div id="myModal" class="modal hide fade" tabindex="-1"\
      role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
      <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal"\
        aria-hidden="true">x</button>\
        <h3 id="myModalLabel">Loads of head</h3>\
      </div>\
      <div class="modal-body">\
        <p>Yowwzaaah</p>\
      </div>\
      <div class="modal-footer">\
        <button class="btn" data-dismiss="modal" aria-hidden="true">\
        Close</button>\
        <button class="btn btn-primary">Save changes</button>\
      </div>\
    </div>');

   $('.content').append($modelOverlay);

   $('a.btn').addClass('offset5');
};


///////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  addLoremFuckingIpsum();
  bootModal();
  homeActive();
  activeTransfer();
});
