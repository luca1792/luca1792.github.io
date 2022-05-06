window.onload=function(){
    let touchStartX;
     $(".screen").on('touchstart',function(e){
        let touch=e.targetTouches[0];
        touchStartX=touch.pageX;
        touchStartY=touch.pageY;
    })
    let touchPrev=0;
    let touchPrevY=20;
    $(".control").on('touchmove',function(e){
        let touch=e.targetTouches[0];
        touchMoveX=(touchStartX-touch.pageX)/60;
        touchMoveY=(touchStartY-touch.pageY)/100;
        touchPrev+=touchMoveX;
        touchPrevY+=touchMoveY;

        if(touchPrevY<0){
            touchPrevY=0;
        }
        if(touchPrevY>60){
            touchPrevY=60;
        }
        $(".screen").css("perspective-origin","50% "+touchPrevY+"%")
        $(".scene").css("transform","rotateY("+(-touchPrev)+'deg)');
        $(".ball").css("transform","rotateY("+(touchPrev)+'deg)');


    })
}
