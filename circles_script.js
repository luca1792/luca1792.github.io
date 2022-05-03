window.onload=function(){

let color=[["#E91E63","#EC407A","#FF4081", "#F8BBD0", "#C2185B"],["#3F51B5","#5C6BC0","#536DFE", "#C5CAE9", "#303F9F"],
["#4CAF50","#66BB6A","#B9F6CA", "#C8E6C9", "#388E3C"],["#FFEB3B","#FFEE58","#FFFF8D", "#FFF9C4", "#FDD835"],["#9C27B0","#AB47BC","#EA80FC", "#E1BEE7", "#7B1FA2", "#8E24AA"]];
let random=Math.floor(Math.random()*5);
document.body.style.setProperty("--color1","#fff4");
document.body.style.setProperty("--color2","#fff4");
document.body.style.setProperty("--color3","#fff6");
document.body.style.setProperty("--color4",color[random][3]);
document.body.style.setProperty("--color5",color[random][4]);

}

let random;
    function circles(){
    random=10+Math.random()*20;
    n=1;
    let randomColor;
    for(i=0;i<random;i++){
        let randomSize=20+Math.random()*100;
        let randomSpeed=10+Math.random()*30+"s";
        let randomTop=Math.random()*100+"vh";
        let randomLeft=Math.random()*100+"vw"; 
        randomColor="rgba("+(100+Math.random()*155)+","+(100+Math.random()*155)+","+(100+Math.random()*155)+",0.5)";
        let newDiv=document.createElement("div");
        newDiv.style.position="absolute";
        newDiv.style.transition="all 0.2s";
        newDiv.style.height=randomSize+"px";
        newDiv.style.width=randomSize+"px";
       newDiv.style.backgroundColor=randomColor;
        newDiv.style.borderRadius=randomSize/2+"px";
        newDiv.style.boxShadow="inset 10px -20px 15px  "+randomColor+" ,inset -3px 3px 5px rgba(255,255,255,0.3) "
        newDiv.style.animationDirection="reverse";
        newDiv.style.backdropFilter="blur(0px)";
        newDiv.style.opacity="0";
        newDiv.style.top=randomTop;  
        newDiv.style.left=randomLeft;  
        newDiv.style.textAlign="center";
        newDiv.style.lineHeight=2;
        newDiv.style.color="white";  
        newDiv.id="circle"+i;
        newDiv.addEventListener("click",function(){
    $(this).css("animation","")
    $(this).css("transform","scale(0)");

})
        newDiv.style.left=Math.random()*document.body.clientWidth+"px";
        let anim="anim"+n+" ";
        newDiv.style.animation=anim+randomSpeed+" infinite linear";
        newDiv.style.animationFillMode="forwards";
        newDiv.style.animationDelay=Math.random()*30+"s";
        document.getElementById("container").appendChild(newDiv);
        if(n==1){
            n=2;
        }
        else{
            n=1;
        }
    }
randomColor="rgba("+(50+Math.random()*205)+","+(50+Math.random()*205)+","+(50+Math.random()*205)+",0.5)";
document.body.style.backgroundColor=randomColor;
    }
circles();
function sposta(){
    for(c=0;c<random;c++){
    let randomLeft=Math.random()*100+"vw"; 
    randomColor="rgba("+(100+Math.random()*155)+","+(100+Math.random()*155)+","+(100+Math.random()*155)+",0.5)";
    let randomSize=20+Math.random()*100;
    let circle="#circle"+c;
    $(circle).css("backgroundColor", randomColor);
    $(circle).css("height", randomSize);
    $(circle).css("width",randomSize);
    $(circle).css("borderRadius", randomSize/2)
    }
}
$("#btn").on("click",function(){
    sposta();
})
