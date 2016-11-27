/**
 * Created by Zxy on 2016/11/27.
 */
(function (){
    var obigPic = document.getElementById('bigPic');
    var aPicImg = obigPic.getElementsByTagName('img');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var  iNow = 0;
    var zIndex = 9;
    for(var i=0; i<aPicImg.length; i++){
            aPicImg[i].style.zIndex = aPicImg.length - i;
       }
    oNext.onmouseover = oPrev.onmouseover = function(){
        if(this==oNext){
            animate(this,{opacity:100})
        }
        if(this==oPrev){
            animate(this,{opacity:100})
        }
    }
    oNext.onmouseout = oPrev.onmouseout = function(){
        if(this==oNext){
            animate(this,{opacity:0})
        }
        if(this==oPrev){
            animate(this,{opacity:0})
        }
    }



    oPrev.onclick = function(){
        iNow--;
        if(iNow == -1){
            iNow = aPicImg.length-1;
        }
        changeImg(iNow);
    }
    oNext.onclick = function(){
        iNow++;
        if(iNow == aPicImg.length){
            iNow = 0;
        }
        changeImg(iNow);
    }













    function changeImg(index){
        iNow= index;
        aPicImg[index].style.opacity = 0;
        aPicImg[index].style.zIndex = zIndex++;
        animate(aPicImg[index],{opacity:100});

    }
})()
