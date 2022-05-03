let color=[["#E91E63","#EC407A","#FF4081", "#F8BBD0", "#C2185B"],["#3F51B5","#5C6BC0","#536DFE", "#C5CAE9", "#303F9F"],
["#4CAF50","#66BB6A","#B9F6CA", "#C8E6C9", "#388E3C"],["#FFEB3B","#FFEE58","#FFFF8D", "#FFF9C4", "#FDD835"],["#9C27B0","#AB47BC","#EA80FC", "#E1BEE7", "#7B1FA2", "#8E24AA"]];
let random=Math.floor(Math.random()*5);
document.body.style.setProperty("--color1",color[random][0]);
document.body.style.setProperty("--color2",color[random][1]);
document.body.style.setProperty("--color3",color[random][2]);
document.body.style.setProperty("--color4",color[random][3]);
document.body.style.setProperty("--color5",color[random][4]);

let bocca=$("#bocca");
        let  occhi=document.getElementById("occhi");
let container=document.getElementById("container");
        document.addEventListener("touchmove",function(event){
    if(event.targetTouches.length==1){
        touch=event.targetTouches[0];
$("#bocca").css("background-color","black");
$("#bocca").css("display","block");
$("#bocca").css("height","15px");
$("#bocca").css("width","15px");
$("#bocca").css("border-bottom-width","0px");

  occhiPosX=container.offsetLeft+occhi.clientWidth/2;
occhiPosY=container.offsetTop+occhi.clientHeight/2;
touchX=touch.pageX-occhiPosX;
touchY=touch.pageY-occhiPosY;
let angolo=Math.round((Math.atan(touchY/touchX))*180/Math.PI);
if(touchX>0&&angolo<0){
    angolo=360+angolo;
}
if(touchX<0){
    angolo=180+angolo;
}
if(angolo>=240&&angolo<300){
    $(".pupilla").css("top","0px");
    $(".pupilla").css("left","0px");
    $(".pupilla").css("animation","none");
}
if(angolo>=210&&angolo<240){
    $(".pupilla").css("top","0px");
    $(".pupilla").css("left","-6px");
    $(".pupilla").css("animation","none");
}
if(angolo>=150&&angolo<210){
    $(".pupilla").css("top","10px");
    $(".pupilla").css("left","-8px");
    $(".pupilla").css("animation","none");
}
if(angolo>=120&&angolo<150){
    $(".pupilla").css("top","15px");
    $(".pupilla").css("left","-6px");
    $(".pupilla").css("animation","none");
}
if(angolo>=60&&angolo<120){
    $(".pupilla").css("top","20px");
    $(".pupilla").css("left","0px");
    $(".pupilla").css("animation","none");
}
if(angolo>=30&&angolo<60){
    $(".pupilla").css("top","15px");
    $(".pupilla").css("left","6px");
    $(".pupilla").css("animation","none");
}
if(angolo>=330&&angolo<360||angolo>0&&angolo<30){
    $(".pupilla").css("top","10px");
    $(".pupilla").css("left","8px");
    $(".pupilla").css("animation","none");
}
if(angolo>=300&&angolo<330){
    $(".pupilla").css("top","0");
    $(".pupilla").css("left","6px");
    $(".pupilla").css("animation","none");
}

        if(touch.pageX>container.offsetLeft&&touch.pageX<container.offsetLeft+container.clientWidth){
    $("#pupsx").css("left","-10px");
    $("#pupdx").css("left","10px");
}
}
 });
document.addEventListener("touchend",function(event){
    $(".pupilla").css("animation","rem 10s infinite");
    $(".pupilla").css("top","10px");
    $("#bocca").css("display","flex");
    $("#bocca").css("height","10px");
$("#bocca").css("width","20px"); 
$("#bocca").css("background-color","transparent")
$("#bocca").css("border-bottom-width","10px")
})

  
