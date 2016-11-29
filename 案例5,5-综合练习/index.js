/**
 * Created by Zxy on 2016/11/27.
 */
(function (){
    var oContainer = document.getElementById('container');
    var oBigPic = document.getElementById('bigPic');
    var aPicImg = oBigPic.getElementsByTagName('img');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var oBlack = document.getElementById('black');
    var oNum1 = document.getElementById('num1');
    var oSmallPic = document.getElementById('smallPic');
    var aSmallPic = oSmallPic.getElementsByTagName('img');
    var  iNow = 0;
    var zIndex = 9;
   /* for(var i=0; i<aPicImg.length; i++){
            aPicImg[i].style.zIndex = aPicImg.length - i;
       }*/
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
    };

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
    for(var i = 0 ;i<aSmallPic.length;i++){
        aSmallPic[i].index = i ;
        aSmallPic[i].style.opacity = 0.3;
        aSmallPic[i].style.filter = 'alpha(opacity = 30)';
        aSmallPic[iNow].style.opacity = 1;
        aSmallPic[iNow].style.filter = 'alpha(opacity = 100)';
        aSmallPic[i].onmouseover = function(){
            animate(this,{
                opacity:100
            })
        };
        aSmallPic[i].onmouseout = function(){
            if(this.index != iNow){
            this.style.opacity = 0.3;
            this.style.filter = 'alpha(opacity = 30)';
            }
        }
        aSmallPic[i].onclick = function(){
            if(this.index != iNow){
            changeImg(this.index);
            }
        }
    }
    var timer;
    function run(){
        timer = setInterval(function(){
            oNext.onclick();
        },1000)
    };
    run();
    oContainer.onmouseout = function (){
        run();

    }
    oContainer.onmouseover = function (){
        clearInterval(timer);
    };
    function changeImg(index){
        iNow= index;
        aPicImg[index].style.opacity = 0;
        aPicImg[index].style.filter = 'alpha(opacity=0)';
        aPicImg[index].style.zIndex = zIndex++;
        animate(aPicImg[index],{opacity:100});
        oNext.style.zIndex = oPrev.style.zIndex = oBlack.style.zIndex = zIndex++;
        oNum1.innerHTML = index+1;
      /*  for(var i=0 ; i<aSmallPic.length;i++){
            if(index != i){
                aSmallPic[index].style.opacity = 0.3;
                aSmallPic[index].style.filter = 'alpha(opacity=30)';
            }
        }*/
        for(var i=0; i<aSmallPic.length; i++){
            aSmallPic[i].style.opacity = .3;
            aSmallPic[i].style.filter = "alpha(opacity=30)";
        }
        aSmallPic[index].style.opacity = 1;
        aSmallPic[index].style.filter = "alpha(opacity=100)";
        var iLeft = 0;
        if(index==0||index==1){
            iLeft = 0
        }else if(index==6||index==7){
            iLeft = 4;
        }else{
            iLeft = index-1;
        }
        animate(oSmallPic,{left:-(iLeft*aSmallPic[0].offsetWidth)});
        console.log(index);
    }
})()
