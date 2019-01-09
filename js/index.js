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
  });

  var imagesForSlider = [
    ['https://picsum.photos/300/200/?random', './assets/halloween.jpg', './assets/cloud-racers.jpg'],
    ['./assets/halloween.jpg', './assets/cloud-racers.jpg', './assets/anniversary.jpg'],
    ['./assets/cloud-racers.jpg', './assets/anniversary.jpg', 'https://picsum.photos/200/150/?random'],
    ['./assets/anniversary.jpg', 'https://picsum.photos/200/150/?random', './assets/halloween.jpg']
  ];

  var sliderTitle = ['THE PEOPLE', 'THE CULTURE', 'THE VALUES', 'THE WORK'];

  var sliderSubtitle = ['Coworkers with a Variety of Talents', 'Perks of a Lifetime', 'A Company with Integrity', 'Creative Challenges'];

  var dotNumber = 2;
  setInterval(function() {
    $('#dot' + dotNumber).click();
    if (dotNumber < 3) {
      dotNumber++;
    } else {
      dotNumber = 0;
    }
  }, 6000);

  $('.dot').on('click', function() {
    dotNumber = $(this).attr('id')[3];

    $('.sliderTitle').text(sliderTitle[dotNumber]);
    $('.sliderSubtitle').text(sliderSubtitle[dotNumber]);

    var images = imagesForSlider[dotNumber];
    $('.mainSliderImage').attr('src', images[0]);
    $('.secondarySliderImage').eq(0).attr('src', images[1]);
    $('.secondarySliderImage').eq(1).attr('src', images[2]);

    $('.selected').toggleClass('selected');
    $('#dot' + dotNumber).toggleClass('selected');
  });
});




