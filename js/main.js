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

    var spinner = $( "#spinner-prize" ).spinner({
      min: 25,
      max: 2500,
      step: 25,
      start: 25,
      culture: 'en-US',
      numberFormat: "C"
    });

    var spinner = $( "#spinner-playersnum" ).spinner({
      min: 2,
      max: 100,
      step: 1,
      start: 20,
      // culture: 'en-US',
      // numberFormat: "C"
    });

    var spinner = $( "#spin-tourPrizeFee" ).spinner({
      min: 25,
      max: 2500,
      step: 25,
      start: 25,
      culture: 'en-US',
      numberFormat: "C"
    });

    $( "#slider-range-voice" ).slider({
      range: "min",
      value: 3,
      min: 1,
      max: 10
    });

    $( "#slider-range-minute" ).slider({
      range: "min",
      value: 3,
      min: 1,
      max: 5,
      slide: function( event, ui ) {
        $( "#range-minute" ).text( ui.value);
      }
    });
    $( "#range-minute" ).text( $( "#slider-range-minute" ).slider( "value"));

    $( "#slider-range-second" ).slider({
      range: "min",
      value: 5,
      min: 1,
      max: 10,
      slide: function( event, ui ) {
        $( "#range-second" ).text( ui.value);
      }
    });
    $( "#range-second" ).text( $( "#slider-range-second" ).slider( "value"));

    $( "#slider-range-rating" ).slider({
      range: true,
      value: 5,
      min: 100,
      max: 4300,
      values: [ 100, 2000 ],
      slide: function( event, ui ) {
        // $( "#ratemin" ).val( ui.values[ 0 ] );
        // $( "#ratemax" ).val( ui.values[ 1 ] );

        $( "#ratemin" ).text( ui.values[ 0 ] );
        $( "#ratemax" ).text( ui.values[ 1 ] );
      }
    });    

    // $( "#ratemin" ).val($( "#slider-range-rating" ).slider( "values", 0 ));
    // $( "#ratemax" ).val($( "#slider-range-rating" ).slider( "values", 1 ));
     $( "#ratemin" ).text($( "#slider-range-rating" ).slider( "values", 0 ));
    $( "#ratemax" ).text($( "#slider-range-rating" ).slider( "values", 1 ));

    $( "#slider-tour-rating" ).slider({
      range: true,
      value: 5,
      min: 100,
      max: 3500,
      values: [ 100, 2000 ],
      slide: function( event, ui ) {
        $( "#ratetourmin" ).text( ui.values[ 0 ] );
        $( "#ratetourmax" ).text( ui.values[ 1 ] );
      }
    });

    $( "#ratetourmin" ).text($( "#slider-tour-rating" ).slider( "values", 0 ));
    $( "#ratetourmax" ).text($( "#slider-tour-rating" ).slider( "values", 1 ));

    $(".js-range-slider").ionRangeSlider({
        min: 0,
        max: 5,
        from: 3,
        grid: false
    });

    $("#datepicker").datepicker({
      dateFormat: "dd.mm"
    });

    var d = new Date();
    // var day = d.getDate();
    // var month = d.getMonth() + 1;
    $("#datepicker").val(  d.getDate() + "." + (d.getMonth() + 1));




    $('.dropdown-toggle').on('click', function(e) {
     if (!$(this).closest('.dropdown').hasClass('open'))  {
      $('.dropdown').removeClass('open');
    }
      $(this).closest('.dropdown').toggleClass('open');
    })

    $(document).on('click', function(e) {
      if (!$(e.target).closest(".dropdown").length) {
        $('.dropdown').removeClass('open');
        console.log('drop')
      }

      if ((!$(e.target).closest(".modal").length) && (!$(e.target).closest("[data-toggle=modal]").length) && (!$(e.target).closest(".ui-datepicker").length)) {
        $('.modal-wrapper').hide();
      }
      e.stopPropagation();
    });

    $('.modal-toggle').on('click', function(e) {
      var modalId = $(this).attr('data-target');
      
      $(modalId).show();
    })

    $('.modal .close').on('click', function(e) {
      $(this).closest('.modal-wrapper').hide();
    })

    $('select').on('click', function(e){

      if ($(this).closest('.select-wrap').hasClass('change')) {
        $(this).closest('.select-wrap').removeClass('change');
      }
      else {
        $(this).closest('.select-wrap').addClass('change');
      }

    })

    $('select').on('blur', function(e){
      $(this).closest('.select-wrap').removeClass('change');
    })


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