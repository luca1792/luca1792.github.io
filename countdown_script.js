window.onload=function(){
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
