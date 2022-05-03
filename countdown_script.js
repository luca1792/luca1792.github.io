window.onload=function(){
let color=[["#E91E63","#EC407A","#FF4081", "#F8BBD0", "#C2185B"],["#3F51B5","#5C6BC0","#536DFE", "#C5CAE9", "#303F9F"],
["#4CAF50","#66BB6A","#B9F6CA", "#C8E6C9", "#388E3C"],["#FFEB3B","#FFEE58","#FFFF8D", "#FFF9C4", "#FDD835"],["#9C27B0","#AB47BC","#EA80FC", "#E1BEE7", "#7B1FA2", "#8E24AA"]];
let random=Math.floor(Math.random()*5);
document.body.style.setProperty("--color1","#e66");
document.body.style.setProperty("--color2","#e44");
document.body.style.setProperty("--color3","#a55);
document.body.style.setProperty("--color4",color[random][3]);
document.body.style.setProperty("--color5",color[random][4]);
document.body.style.backgroundColor="rgb(200,100,100)";
timeIn=5;
numberW=$(".number").innerWidth();
numberT=$(".number").offset();
startW=$("#start").innerWidth();
startH=$("#start").innerHeight();
$("#start").css("left",document.body.clientWidth/2-startW/2+"px");
$("#start").css("top",document.body.clientHeight/2-startH/2+"px")
$("#seconds").css("left",document.body.clientWidth/2-startW/2+"px");
$("#seconds").css("top",document.body.clientHeight/2-startH*2+"px");
$("#start").on("click",function(){
    timeIn=$("#seconds").val();
    if(timeIn==""){
        timeIn=10
    }
    start(timeIn);
})
    $(".number").css("left",document.body.clientWidth/2-numberW/2+"px")
$(".number").css("top",numberT.top+"px")
$(".number1").css("left",document.body.clientWidth/2-numberW/2-5+"px");

$(".number1").css("top",numberT.top+5+"px");
$(".number2").css("left",document.body.clientWidth/2-numberW/2-10+"px")
$(".number2").css("top",numberT.top+10+"px")

$(".go").css("left",document.body.clientWidth/2-numberW/2+"px")
$(".go").css("top",numberT.top+"px")
$(".go1").css("left",document.body.clientWidth/2-numberW/2-5+"px");

$(".go1").css("top",numberT.top+5+"px")



$(".go2").css("left",document.body.clientWidth/2-numberW/2-10+"px")

$(".go2").css("top",numberT.top+10+"px")

function start(x){

document.getElementById("audio").play();
document.getElementById("audio").pause();
y=x;

$(".number").css("animation","enter 1s "+y+" ease");
$(".number1").css("animation","enter 1s "+y+" ease");
$(".number2").css("animation","enter 1s "+y+" ease");
$("#start").css("display","none");
$("#seconds").css("display","none");

$("#n").html(y);
$("#n-1").html(y);
$("#n-2").html(y);
y-=1
const myInterval=setInterval(display,1000);
}

function display(){

$("#n").html(y);
$("#n-1").html(y);
$("#n-2").html(y);
y-=1



if(y==-1){
    $("#go").css("animation","enterGo 1s ease");
$("#go-1").css("animation","enterGo 1s ease");
$("#go-2").css("animation","enterGo 1s ease");
document.getElementById("audio").play();
navigator.vibrate(1000)
stop(this)
}
}
function stop(x){
    clearInterval(x)
}
}
