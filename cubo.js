let color=[["#E91E63","#EC407A","#FF4081", "#F8BBD0", "#C2185B"],["#3F51B5","#5C6BC0","#536DFE", "#C5CAE9", "#303F9F"],
["#4CAF50","#66BB6A","#B9F6CA", "#C8E6C9", "#388E3C"],["#FFEB3B","#FFEE58","#FFFF8D", "#FFF9C4", "#FDD835"],["#9C27B0","#AB47BC","#EA80FC", "#E1BEE7", "#7B1FA2", "#8E24AA"]];
let random=Math.floor(Math.random()*5);
document.body.style.setProperty("--color1",color[random][1]);
document.body.style.setProperty("--color2",color[random][2]);
document.body.style.setProperty("--color3",color[random][4]);
document.body.style.setProperty("--color4",color[random][3]);
document.body.style.setProperty("--color5",color[random][4]);

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
