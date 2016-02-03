$(document).ready(function() {

$('#bioTextEnd').hide();

$("#coverDiv p").fitText(1, { minFontSize: '70px', maxFontSize: '128px' });
$("#bioHead p").fitText(1, { minFontSize: '40px', maxFontSize: '116px' });
$("#bioText p").fitText(1, { minFontSize: '16px', maxFontSize: '30px' });
$("#someWorkDiv p").fitText(1, { minFontSize: '40px', maxFontSize: '116px' });
$("#footer-main p, li").fitText(1, { minFontSize: '12px', maxFontSize: '24px' });

$(".navbar-nav li a").click(function(event) {
  $(".navbar-collapse").collapse('hide');
  });

$(function() {
  var oTop = $('#bioText').offset().top - window.innerHeight;
    $(window).scroll(function(){
    
    var pTop = $('body').scrollTop();
      console.log( pTop + ' - ' + oTop );
    if( pTop > oTop ){
        start_type();
    }
  });
});

function start_type(){
  $(function() {
    $('#bioText').typed({
      stringsElement: $('#paragraphText'),
      typeSpeed: 40,
      backSpeed: -1000,
      callback: function() {
        $('#bioText').remove();
        $('#bioTextEnd').show();
      },
    }); 
    
      $('.stops').on('click', function() {
        $('#paragraphText').typed('stops');
        $('#bioText').remove();
        $('#bioTextEnd').show();
        $('#skipBtn').remove();
      });
            // No start button on page
    // $('.start').on('click', function() {
    //     $('#bioText').data('typed').continueTyping();
    //   });
  });
}





 

}); //End of doc ready

 



// FitText
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

