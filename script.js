$( document ).ready(function() {

    $('a[href*="#"]:not([href="#"])').click(function() {
    	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    	    var target = $(this.hash);
    	    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    	    if (target.length) {
    	      $('html, body').animate({
    	        scrollTop: target.offset().top
    	      }, 1000);
    	      return false;
    	    }
    	  }
    	});
    
    
    /*Menu Controls*/
    $( ".menu-btn" ).click(function() {
        $(".menu").addClass('show-menu');
        $('body').addClass('fade');
        $('.all').addClass('fade');
        $(".menu-layer").fadeIn(500);
         
    });
    
    $( ".menu ul li, .menu ul li a, .close-menu, .menu-layer" ).click(function() {
        $(".menu").removeClass('show-menu');
        $('body').removeClass('fade');
        $('.all').removeClass('fade');
        $(".menu-layer").delay(250).fadeOut(500);
    });
    
    
    /*Audio Controls*/
    
    $( ".play-audio" ).click(function() {
        $('.myAudio').attr("src", $(this).attr("audioUrl"));
        $(".footer-audio").addClass('show-audio');
        document.getElementById('myAudio').play();
        $('.audioplayer').addClass("audioplayer-playing");
        $(".side-buttons").removeClass('show-side');
        $('.btt-footer').fadeOut(500);
    });
    
    $( ".audio-box .hide-audio" ).click(function() {
     $(".footer-audio").removeClass('show-audio');
     $(".side-buttons").addClass('show-side');
     $('.btt-footer').fadeIn(500);
    });
    
    $( ".show-right" ).click(function() {
        $(".footer-audio").addClass('show-audio');
        $(".side-buttons").removeClass('show-side');
        $('.btt-footer').fadeIn(500);
    });
    
    $( ".close-audio, .vid-link" ).click(function() {
        $(".footer-audio").removeClass('show-audio');
        $(".side-buttons").removeClass('show-side');
        document.getElementById('myAudio').pause();
        $('.btt-footer').fadeIn(500);
    });
    
    $(function(){
        $('.myAudio').audioPlayer();
    });
    
    /*Video Controls*/
    
    $( ".vid-link, .big-play" ).click(function() {
        $('.myVideo').attr("src", $(this).attr("vidUrl"));
        $('.media-overlay, .close-media, .video-box').fadeIn(500);
        $('body').addClass('fade');
        $(".footer-audio").removeClass('show-audio');
        $(".side-buttons").removeClass('show-side');
        document.getElementById('myAudio').pause();
        document.getElementById('myVideo').play();
    });
    
    /* Image Pop Controls*/
    
     $( ".pop-image" ).click(function() {
         $('.myImage').attr("src", $(this).attr("imgUrl"));
           $('.media-overlay, .close-media, .img-pop-box').fadeIn(500, function(){
               $('.img-holder img').fadeIn(500);
           });
            $('body').addClass('fade');
     });
    
    /*iframe Controls*/
    
    $( ".tube-link" ).click(function() {
        $('.media-overlay, .close-media, .tube-frame').fadeIn(500);
        $('body').addClass('fade');
        $(".footer-audio").removeClass('show-audio');
        $(".side-buttons").removeClass('show-side');
        document.getElementById('myAudio').pause();
        $('.youTube').attr("src", $(this).attr("vidUrl"));
    });
    
    $( ".close-media, .img-holder img" ).click(function() {
        $('.youTube').attr("src", $(this).attr("vidUrl"));
        $('.media-overlay, .tube-frame, .close-media, .video-box, .img-holder img').fadeOut(500, function(){
            $('.img-pop-box').fadeOut(500);
        });
        document.getElementById('myVideo').pause();
        $('body').removeClass('fade');
    });
    
    
    
    /*Parallax*/
    
    (function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
        	// Save a reference to the element
        	var $this = $(this);
 
        	// Set up Scroll Handler
        	$(document).scroll(function(){
 
    		        var scrollTop = $(window).scrollTop();
            	        var offset = $this.offset().top;
            	        var height = $this.outerHeight();
 
    		// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}
 
			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
    			$this.css('background-position', 'center ' + yBgPosition + 'px');
                
        	});
        });
    };
  
  
}(jQuery));

$('.parallax').parallax({
	speed :	-0.125
});

});

 window.document.onkeydown = function (e)
        {
        if (!e) e = event;
        if (e.keyCode == 27)
        {
        
            $('.youTube').attr("src", $(this).attr("vidUrl"));
            $('.media-overlay, .tube-frame, .close-media, .video-box, .img-holder img').fadeOut(500, function(){
                $('.img-pop-box').fadeOut(500);
            });
            document.getElementById('myVideo').pause();
            $('body').removeClass('fade');
            
            $(".menu").removeClass('show-menu');
            $('body').removeClass('fade');
            $('.all').removeClass('fade');
            $(".menu-layer").delay(250).fadeOut(500);

            $('.btt-footer').fadeIn(500);
        
        }
        
         if (!e) e = event;
        if (e.keyCode == 39)
        {
            $(".menu").addClass('show-menu');
            $('body').addClass('fade');
            $('.all').addClass('fade');
            $(".menu-layer").fadeIn(500);
        
        }
        
        
        if (!e) e = event;
        if (e.keyCode == 37)
        {
            $(".menu").removeClass('show-menu');
            $('body').removeClass('fade');
            $('.all').removeClass('fade');
            $(".menu-layer").delay(250).fadeOut(500);
        
        }
        
        };

    

$(document).scroll(function() {
	  var y = $(this).scrollTop();
	  if (y > 40) {
	    $('.btt-footer').fadeIn(500);
	  } else {
	    $('.btt-footer').fadeOut(500);
	  }
	});