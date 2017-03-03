$(function(){
    $('#all').on('click',function(){
        $(".all").css('display','block');
    });
    $('#Web').on('click',function(){
        $(".all").css('display','none');
        $('.web').css('display','block');
    });
    $('#App').on('click',function(){
        $(".all").css('display','none');
        $('.app').css('display','block');
    });
    $('#Branding').on('click',function(){
        $('.branding').css('display','block').siblings().css('display','none');
    });

})