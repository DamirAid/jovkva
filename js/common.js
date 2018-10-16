$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(function() {
var accordion = function(){
  var data = $('.accordion').attr('data-accordion')
  
  $('.accordion-header').on('click', function(){
        $(this).next('.accordion-body').not(':animated').slideToggle()
  })
}
accordion();    

});

$(document).ready(function () {
    $('#dropdown').click(function (event) {
        $(this).children("ul").slideToggle();
        event.stopPropagation();
    });
});
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    
    items: 1,
    
    
  });
}); 
jQuery( document ).ready(function() {
	 
  
        // 1) ASSIGN EACH 'DOT' A NUMBER
			dotcount = 1;
	 
			jQuery('.owl-dot').each(function() {
			  jQuery( this ).addClass( 'dotnumber' + dotcount);
			  jQuery( this ).attr('data-info', dotcount);
			  dotcount=dotcount+1;
			});
			
			 // 2) ASSIGN EACH 'SLIDE' A NUMBER
			slidecount = 1;
	 
			jQuery('.owl-item').not('.cloned').each(function() {
			  jQuery( this ).addClass( 'slidenumber' + slidecount);
			  slidecount=slidecount+1;
			});
			
			// SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
			jQuery('.owl-dot').each(function() {
			
          grab = jQuery(this).data('info');

          slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
          console.log(slidegrab);

          jQuery(this).css("background-image", "url("+slidegrab+")");  

      });
			
			// THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
        // TO MAKE IT ALL NEAT 
			amount = jQuery('.owl-dot').length;
			gotowidth = 100/amount;
			
			jQuery('.owl-dot').css("width", gotowidth+"%");
			newwidth = jQuery('.owl-dot').width();
			jQuery('.owl-dot').css("height", newwidth+"px");
			
			
	
});