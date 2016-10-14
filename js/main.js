// Stuck Navbar

$(document).ready(function(){
    $(document).scroll(function(){
        if($(window).scrollTop() > 750){
            $('.navbar').addClass('navbar-fixed-top')
        }
        if($(window).scrollTop() < 751){
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });
});

// SLiding Navbar

$(".navbar-dark ul li a[href^='#']").on('click',function(e){
    
    e.preventDefault();
    
    var hash=this.hash;
    
    $('html, body').animate({
        scrollTop:$(hash).offset().top
    }, 2000, function(){
        
        window.location.hash = hash;
    });
    
});

$(" #section-parallax .col-sm-8 a[href^='#']").on('click',function(e){
    
    e.preventDefault();
    
    var hash=this.hash;
    
    $('html, body').animate({
        scrollTop:$(hash).offset().top
    }, 2000, function(){
        
        window.location.hash = hash;
    });
    
});


$(".footer .scroll-to-top-button a[href^='#']").on('click',function(e){
    
    e.preventDefault();
    
    var hash=this.hash;
    
    $('html, body').animate({
        scrollTop:$(hash).offset().top
    }, 2000, function(){
        
        window.location.hash = hash;
    });
    
});

// Animation

$('.js-wp-1').waypoint(function(direction){
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '50%'
});

$('.js-wp-2').waypoint(function(direction){
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-3').waypoint(function(direction){
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-4').waypoint(function(direction){
    $('.js-wp-4').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$('.js-wp-5').waypoint(function(direction){
    $('.js-wp-5').addClass('animated zoomInLeft');
}, {
        offset: '50%'
});

$('.js-wp-6').waypoint(function(direction){
    $('.js-wp-6').addClass('animated zoomInRight');
}, {
        offset: '50%'
});
