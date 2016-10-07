$(document).ready(function(){
    $(document).scroll(function(){
        if($(window).scrollTop() > 750){
            $('.navbar').addClass('navbar-fixed-top')
        }
        if($(window).scrollTop() < 751){
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });
})