$(document).ready(function(){
    var navHeight = parseInt($('nav').css('height'), 10);
    var photosHeight = parseInt($('.photos').css('height'), 10);
    $('.welcome').css('height', (window.innerHeight - navHeight - photosHeight) + 'px');
});