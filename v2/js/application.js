$(document).ready(function(){
    var navHeight = parseInt($('nav').css('height'), 10);
    var photosHeight = parseInt($('.photos').css('height'), 10);
    $('.main-row').css('height', (window.innerHeight - navHeight) + 'px'); 
    $('.welcome').css('height', (window.innerHeight - navHeight - photosHeight) + 'px');

 	$('#home-link').click(function(){ changeSectionTo('home'); });
	$('#caompany-link').click(function(){ changeSectionTo('company'); });
	$('#products-link').click(function(){ changeSectionTo('products'); });
	$('#services-link').click(function(){ changeSectionTo('services'); });
	$('#maps-link').click(function(){ changeSectionTo('maps'); });
	$('#contact-link').click(function(){ changeSectionTo('contact'); });
});

function changeSectionTo(new_section) {
	if($('#'+new_section).is(":visible")) return;
	$('.main-row:visible').fadeOut('fast');
	$('#'+new_section).show().fadeIn('slow');
}