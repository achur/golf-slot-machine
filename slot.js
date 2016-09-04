$(document).ready(function() {

  var firstReel = $('#first-reel').slotMachine({
    active: 0,
    delay: 500
  });

  var secondReel = $('#second-reel').slotMachine({
    active: 1,
    delay: 500
  });

  var thirdReel = $('#third-reel').slotMachine({
    active: 2,
    delay: 500
  });

  var stop = 0;
  var startSpinning = function() {
    firstReel.shuffle();
    secondReel.shuffle();
    thirdReel.shuffle();
    stop = 4;
  };

  $('#spin').click(function() {
    switch(stop) {
      case 3:
        firstReel.stop();
        break;
      case 2:
        secondReel.stop();
        break;
      case 1:
        thirdReel.stop();
        break;
      default:
        startSpinning();
    }
    stop--;
    if (stop == 0) {
      $('#spin').html("Spin");
    } else {
      $('#spin').html("Stop");
    }
  });

});
