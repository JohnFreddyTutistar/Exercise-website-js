$(document).ready(function(){
    var imgItems = $('.slider li').length;
    var imgPos = 1;

    $('.slider li').hide();
    $('.slider li:first').show();
    
    $('.right input').click(nextSlider);
    $('.left input').click(prevSlider);

    function nextSlider(){
        if(imgPos <= 1){
            imgPos = imgItems;
        } else{
            imgPos--;
        }

        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();

        //$('.slider li:nth-child('+ imgPos +')').children('img').css('border','10px solid blue');

        $('.slider li:nth-child('+ (imgPos-1) +')').show();
        $('.slider li:nth-child('+ (imgPos+1) +')').show();

    }
    function prevSlider(){
        if(imgPos >= imgItems){
            imgPos = 1;
        } else{
            imgPos++;
        }
        console.log(imgPos);

        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
        $('.slider li:nth-child('+ imgPos +')').children('img').css('border','10px solid blue');
        $('.slider li:nth-child('+ (imgPos-1) +')').show();
        $('.slider li:nth-child('+ (imgPos+1) +')').show();

    }
});