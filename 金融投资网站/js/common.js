$(function(){
    $('li',"#nav").on('mouseover',function() {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    $("a","#btn").on('click',function(){
        var href = $(this).attr('href');

        var top = $(href).offset().top;
        //console.log(top);
        $(document.body).animate({
            scrollTop : top
        },500);

    });
    $('#btn').hide();
    $(window).scroll(function(){
        if($(window).scrollTop() == 0){
            $('#btn').hide();
        }else{
            $('#btn').show();
        }
    });
});
