$(function() {

  // change .active class on click script
  const mainNavLi = $('.nav-pills li');

  mainNavLi.on('click', function(event) {
    mainNavLi.each(function(index) {
      if($(this).hasClass('active')){
        $(this).removeClass('active')
      }
    });

    $(this).addClass('active');
  });

  // icon scale on product and nav link hover
  const product = $('.product');

  product.on('mouseover', function() {
    let img = $(this).find('img');
    img.css('transform','scale(1.2)');
  });
  product.on('mouseout', function() {
    let img = $(this).find('img');
    img.css('transform','scale(1.0)');
  });

  const navLink = $('a.nav-link');
  navLink.on('mouseover', function() {
    let img = $(this).find('img');
    img.css('transform','scale(1.2)');
  });
  navLink.on('mouseout', function() {
    let img = $(this).find('img');
    img.css('transform','scale(1.0)');
  });

  // switch the chart
  const switcher = $('span.switcher');

  $('div.switch').on('click', function(event) {
    if (switcher.hasClass('on')) {
      switcher.animate({
        left: '-=50px',
      }, 400);
      switcher.css('backgroundColor', '#e81c7b');
      switcher.toggleClass('on');
      $('canvas').fadeOut(400);
    } else {
      switcher.animate({
        left: '+=50px',
      }, 400);
      switcher.css('backgroundColor', '#01cc01');
      switcher.toggleClass('on');
      $('canvas').fadeIn(400);
    }
  });
});
