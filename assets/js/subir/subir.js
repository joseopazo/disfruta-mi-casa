$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.arriba').slideDown(300);    
        } else {
            $('.arriba').slideUp(300);
        }
    });
    $('.arriba').on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});