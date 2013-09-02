// $(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
// });

$(document).ready(function() {
  $(document).on('keyup', function(event) {
 
    if(event.which === 81) {
      advance_player('#player1_strip .active');
    }
    else if (event.which === 80) {
      advance_player('#player2_strip .active');
    }
 
    if ($('#player1_strip td:last-child').hasClass('active')) {
      $(".player1_wins").show();
      $('#player2_strip .active').removeClass('active');
    }
 
    else if ($('#player2_strip td:last-child').hasClass('active')) {
      $(".player2_wins").show();
      $('#player1_strip .active').removeClass('active');
    }
  });
 
});
 
var advance_player = function(player) {
  $(player).removeClass('active').next().addClass('active');
 
};
