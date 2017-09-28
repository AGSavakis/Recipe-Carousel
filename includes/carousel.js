/**
 * @author Student
 */

$(document).ready(function(){
	
	$('.carousel_data .carousel_item').each(function(){
		
		$('#carousel').append($(this).find('.image').html() );
		
	});
	createCarousel();
});

//custom function for roundabout called createCarousel
function createCarousel(){
	
	$('div#carousel').roundabout({
		childSelector: 'img',
		tilt: -5,
		minOpacity: .4,
		maxOpacity: 1,
		minScale: .65,
		duration: 1200,
		clickToFocus: true,
		autoplay: true,
		autoplayDuration: 2500,
		autoplayPauseOnHover: true,
		clickToFocusCallback: showCaption
	});
	createCustomButtons ();
}
//custom function to wire next & prev buttons to roundabout carousel
function createCustomButtons (){
	
	$('.nextItem').click(function(){
		$('div#carousel').roundabout('animateToNextChild');
	});
	
	$('.prevItem').click(function(){
		$('div#carousel').roundabout('animateToPreviousChild');
	});
}
//custom function to showCaption
function showCaption(){
	
	//alert( $('div#carousel').data('roundabout').childInFocus );
}

