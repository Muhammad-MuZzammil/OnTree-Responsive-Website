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

$('.js-wp-1').waypoint(function(direction){
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '50%'
});