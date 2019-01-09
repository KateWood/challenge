$(function() {
  for (var i=0; i < 12; i++) {
    var width = (Math.random() * 3 + 1) * 100;
    $('.photoFeedImages').append('<img class="photoFeedImage" src="https://picsum.photos/' + width + '/200/?random"/>');
    console.log('200 x ' + width);
  }

  $('.playIcon').on('click', function() {
    $('.testimonial .image').toggleClass('rotate');
    setTimeout(function(){
      $('.testimonial .image').toggleClass('rotate');
    }, 2000);
  })
});