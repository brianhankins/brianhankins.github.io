$(document).ready(function() {
'use strict'

//Prevents background resiging on mobile when address bar hides on iOS and Android

var bg = jQuery("#cover", "#bioCover");
jQuery(window).resize("resizeBackground");
function resizeBackground() {
    bg.height(jQuery(window).height() + 60);
}
resizeBackground();




//Hide the Skip Button and Biography Text which may be called
$('#skipBtn').hide();
$('#bioTextEnd').hide();


//Responsive FitText.js developed by GitHub: davatron5000//
$("#coverDiv p").fitText(1, { minFontSize: '27px', maxFontSize: '128px' });
$("#bioHead p").fitText(1, { minFontSize: '26px', maxFontSize: '116px' });

// $("#bioText, #bioTextEnd").fitText(1, { minFontSize: '14px', maxFontSize: '24px' });
$("#someWorkDiv p").fitText(1, { minFontSize: '26px', maxFontSize: '70px' });
$("#footer-main p, li").fitText(1, { minFontSize: '8px', maxFontSize: '15px' });

//Navbar collapse
$(".navbar-nav li a").click(function(event) {
  $(".navbar-collapse").collapse('hide');
  });


/*Checks to see if screen size is <768px and if so runs stopNow() otherwise Typed.js will run until stop button is pressed or its completed.
*/
$(function() {
  var oTop = $('#bioText').offset().top - window.innerHeight;
    $(window).scroll(function(){
      var pTop = $('body').scrollTop();
        console.log( pTop + ' - ' + oTop );
      if( pTop > oTop && $(window).width() < 767){
        return;
      }
      else if (pTop > oTop) {
        $('#skipBtn').show();
        start_type();
      }
  });
});

//Typed.js main function
function start_type(){
  $(function() {
    $('#bioText').typed({
      stringsElement: $('#paragraphText'),
      typeSpeed: 43,
      callback: function() {
        $('#bioText').remove();
        $('#bioTextEnd').show();
        $('#skipBtn').remove();
      },
    });
      $('.stops').on('click', function() {
        $('#paragraphText').typed('stops');
        $('#bioText').remove();
        $('#bioTextEnd').show();
        $('#skipBtn').remove();
      });
  });
}

}); //End of doc ready



// FitText Main function
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

