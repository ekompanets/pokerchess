(function () {

  var getOrientation = function () {
    if ($(window).width() > $(window).height()) {
      $('body').removeClass('screen-portrait').addClass('screen-land');
    }
    else {
      $('body').removeClass('screen-land').addClass('screen-portrait');
    }
  }

  $(document).ready(function () {
    getOrientation(); 


    $(".scroll-link").on("click", "a", function (event) {

      event.preventDefault();
      var id  = $(this).attr('href'),      
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 600);
    });

    
    $('.nav-button').on('click',function () {
       $('.menu').toggleClass('show');

    });

    $('.menu-close').on('click',function () {
        $('.menu').removeClass('show')
    });

    $(window).on('resize', function () {
      getOrientation();

    })
  });

  

  $('.button-nav').click(function(){
    $(this).parents('.header').toggleClass('active').find('.menu').slideToggle(300); 
    return false;
  });

})();