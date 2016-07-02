var input = document.querySelectorAll('input');
for(i=0; i<input.length; i++){
    input[i].setAttribute('size',input[i].getAttribute('placeholder').length);
}

// fade a bunch of stuff out on scroll
$(window).scroll(function(){
  // $(".info").css("opacity", 1 - $(window).scrollTop() / 600);
  $(".site-header").css("opacity", 1 - $(window).scrollTop() / 200);
});

// spin the header stuff a little on scroll
$(window).scroll(function() {
  var theta = $(window).scrollTop() / 1200 % Math.PI;
  $('#red').css({ transform: 'rotate(' + theta + 'rad)' });
  $('#blue').css({ transform: 'rotate(-' + theta + 'rad)' });
});

$(function() {
    $('body').removeClass('fade-out');
});
