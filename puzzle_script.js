window.onload=function(){
let color=[["#E91E63","#EC407A","#FF4081", "#F8BBD0", "#C2185B"],["#3F51B5","#5C6BC0","#536DFE", "#C5CAE9", "#303F9F"],
["#4CAF50","#66BB6A","#B9F6CA", "#C8E6C9", "#388E3C"],["#FFEB3B","#FFEE58","#FFFF8D", "#FFF9C4", "#FDD835"],["#9C27B0","#AB47BC","#EA80FC", "#E1BEE7", "#7B1FA2", "#8E24AA"]];
let random=Math.floor(Math.random()*5);
document.body.style.setProperty("--color1",color[random][0]);
document.body.style.setProperty("--color2",color[random][1]);
document.body.style.setProperty("--color3",color[random][2]);
document.body.style.setProperty("--color4",color[random][3]);
document.body.style.setProperty("--color5",color[random][4]);

//variabili controllo colonne

let blackCell_a=[];

let blackCell_b=[];


let blackCell_c=[];

let blackCell_d=[];


let blackCell_e=[];


let blackCell_f=[];

let blackCell_g=[];


let blackCell_h=[];


let blackCell_i=[];


let blackCell_j=[];

let blackCell_k=[];

let blackCell_l=[];
let blackCell_m=[];
let blackCell_n=[];


let blackCell_o=[];


let blackCell_p=[];


let blackCell_q=[];

let blackCell_r=[];

let blackCell_s=[];
let blackCell_t=[];
let blackCell_u=[];


let blackCell_v=[];


   




//variabili controllo righe

let th1=[];

let th2=[];

let th3=[];

let th4=[];

let th5=[];

let th6=[];

let th7=[];

let th8=[];

let th9=[];

let th10=[];

let th11=[];

let th12=[];

let th13=[];
let th14=[];

let th15=[];

let th16=[];

let th17=[];

let th18=[];

let th19=[];

let th20=[];

let th21=[];

let th22=[];

let panda=
[[[],["b4", "b5"],["c3", "c6", ],["d10", "d11", "d12", "d13", "d2", "d7", "d8", "d9", ],["e1", "e10", "e11", "e12", "e13", "e14", "e6", "e7", "e8", "e9", ],["f1", "f10", "f11", "f12", "f13", "f14", "f15", "f6", "f7", "f8", "f9", ],["g1", "g11", "g12", "g13", "g14", "g15", "g16", "g5", "g6", "g7", ],["h12", "h13", "h14", "h15", "h16", "h2", "h5", "h6", ],["i12", "i13", "i14", "i15", "i16", "i3", "i4", "i5", ],["j11", "j12", "j13", "j14", "j15", "j16", "j17", "j4", "j5", "j8", "j9", ],["k10", "k11", "k12", "k13", "k15", "k16", "k17", "k4", "k5", "k6", ],["l10", "l13", "l15", "l16", "l17", "l4", "l5", "l6", "l7", "l8", "l9", ],["m10", "m15", "m16", "m17", "m4", "m5", "m6", "m7", "m8", "m9", ],["n10", "n13", "n15", "n16", "n17", "n4", "n5", "n6", "n7", "n8", "n9", ],["o10", "o11", "o12", "o13", "o15", "o16", "o17", "o4", "o5", "o6", ],["p11", "p12", "p13", "p14", "p15", "p16", "p17", "p3", "p4", "p5", "p8", "p9", ],["q12", "q13", "q14", "q15", "q16", "q2", "q5", ],["r1", "r12", "r13", "r14", "r15", "r16", "r6", ],["s1", "s11", "s12", "s13", "s14", "s15", "s6", "s7", ],["t10", "t11", "t12", "t13", "t14", "t2", "t6", "t7", "t8", "t9", ],["u10", "u11", "u12", "u13", "u3", "u6", "u7", "u8", "u9" ],["v4", "v5", ]],["", "2", "1-1", "1-7", "1-9","1-10","1-3-6","1-2-5","3-5","2-2-7","3-4-3","7-1-3","7-3","7-1-3","3-4-3","3-2-7","1-1-5","1-1-5","1-2-5","1-9","1-8","2"], [["e1", "f1", "g1", "r1", "s1", ],["d2", "h2", "q2", "t2", ],["c3", "i3", "p3", "u3", ],["b4", "i4", "j4", "k4", "l4", "m4", "n4", "o4", "p4", "v4", ],["b5", "g5", "h5", "i5", "j5", "k5", "l5", "m5", "n5", "o5", "p5", "q5", "v5", ],["c6", "e6", "f6", "g6", "h6", "k6", "l6", "m6", "n6", "o6", "r6", "s6", "t6", "u6", ],["d7", "e7", "f7", "g7", "l7", "m7", "n7", "s7", "t7", "u7", ],["d8", "e8", "f8", "j8", "l8", "m8", "n8", "p8", "t8", "u8", ],["d9", "e9", "f9", "j9", "l9", "m9", "n9", "p9", "t9", "u9", ],["d10", "e10", "f10", "k10", "l10", "m10", "n10", "o10", "t10", "u10", ],["d11", "e11", "f11", "g11", "j11", "k11", "o11", "p11", "s11", "t11", "u11", ],["d12", "e12", "f12", "g12", "h12", "i12", "j12", "k12", "o12", "p12", "q12", "r12", "s12", "t12", "u12", ],["d13", "e13", "f13", "g13", "h13", "i13", "j13", "k13", "l13", "n13", "o13", "p13", "q13", "r13", "s13", "t13", "u13", ],["e14", "f14", "g14", "h14", "i14", "j14", "p14", "q14", "r14", "s14", "t14", ],["f15", "g15", "h15", "i15", "j15", "k15", "l15", "m15", "n15", "o15", "p15", "q15", "r15", "s15", ],["g16", "h16", "i16", "j16", "k16", "l16", "m16", "n16", "o16", "p16", "q16", "r16", ],["j17", "k17", "l17", "m17", "n17", "o17", "p17", ],[],[],[],[],[]]];
let dino=
[[[],[],["c7","c8","c9","c10","c11","c12"],["d10","d11","d12","d13"],["e10","e11","e12","e13","e14"],
["f11","f12","f13","f14","f15"],
["g12","g13","g14","g15"],["h12","h13","h14","h15","h16"],


["i11","i12","i13","i14","i15","i16","i17","i18","i19","i20"],["j10","j11","j12","j13","j14","j15","j16","j17","j18","j20"],["k9","k10","k11","k12","k13","k14","k15","k16"],["l8","l9","l10","l11","l12","l13","l14","l15","l16"]
,["m2", "m3","m4","m5","m6","m7","m8","m9","m10","m11","m12","m13","m14","m15","m16","m17","m18"],["n1","n2", "n3","n4","n5","n6","n7","n8","n9","n10","n11","n12","n13","n14","n15","n16","n17","n18","n19","n20"],["o1","o3","o4","o5","o6","o7","o8","o9","o10","o11","o12","o13","o14","o15","o20"],["p1","p2", "p3","p4","p5","p6","p7","p8","p9","p10","p11","p12","p13"],["q1","q2", "q3","q4","q5","q6","q9"],["r1","r2", "r3","r4","r6","r9"]
,["s1","s2", "s3","s4","s6"],["t1","t2","t3","t4"]
,
["u2","u3","u4"],[]],["", "0", "6", "4", "5","5","4","5","10","9-1","8","9","17","20","1-13-1","13","6-1","4-1-1","4-1","4","3","0"],[["n1", "o1", "p1", "q1", "r1", "s1","t1"]
,["n2", "m2", "p2", "q2", "r2", "s2", "t2","u2"]
,["m3","n3", "o3", "p3", "q3", "r3", "s3", "t3","u3"]
,["m4","n4", "o4", "p4", "q4", "r4", "s4", "t4","u4"]
,["m5","n5", "o5", "p5", "q5"],["m6","n6", "o6", "p6", "q6", "r6", "s6"],[ "c7","m7","n7", "o7", "p7"],[ "c8","l8","m8","n8", "o8", "p8"],["c9","k9", "l9","m9","n9", "o9", "p9", "q9","r9"]
,["c10","d10","e10","j10","k10", "l10","m10","n10", "o10", "p10"],[ "c11","d11","e11", "f11","i11","j11","k11", "l11","m11","n11", "o11", "p11"]
,[ "c12","d12","e12", "f12","g12", "h12","i12","j12","k12", "l12","m12","n12", "o12", "p12"]
,[ "d13","e13", "f13","g13", "h13","i13","j13","k13", "l13","m13","n13", "o13", "p13"]
,[ "e14", "f14","g14", "h14","i14","j14","k14", "l14","m14","n14", "o14"],["f15","g15", "h15","i15","j15","k15", "l15","m15","n15", "o15"],["h16","i16","j16","k16","l16","m16", "n16"],["i17","j17","m17", "n17"]

,[ "i18","j18","m18","n18"],[ "i19","n19"],[ "i20","j20", "n20","o20"]
,[]
,[]]]

let yoshi=[[[],[],[],["d10", "d11", "d12", "d13", "d14", "d15", "d16", "d17", ],["e17", "e18", "e9", ],["f11", "f12", "f13", "f14", "f15", "f16", "f17", "f19", "f8", ],["g10", "g18", "g19", "g8", ],["h19", "h20", "h4", "h5", "h6", "h7", "h8", "h9", ],["i20", "i3", "i4", "i9", ],["j2", "j20", "j3", "j8", ],["k11", "k2", "k20", "k3", "k6", "k7", "k8", ],["l20", "l3", "l8", ],["m20", "m3", "m8", ],["n11", "n2", "n20", "n3", "n6", "n7", "n8", ],["o2", "o20", "o3", "o8", ],["p20", "p3", "p4", "p9", ],["q19", "q20", "q4", "q5", "q6", "q7", "q8", "q9", ],["r10", "r18", "r19", "r8", ],["s11", "s12", "s13", "s14", "s15", "s16", "s17", "s19", "s8", ],["t17", "t18", "t9", ],["u10", "u11", "u12", "u13", "u14", "u15", "u16", "u17", ],[]],["", "0", "0", "8", "1-2","1-7-1","1-1-2","6-2","2-1-1","2-1-1","2-3-1-1","1-1-1","1-1-1","2-3-1-1","2-1-1","2-1-1","6-2","1-1-2","1-7-1","1-2","8","0"],[[],["j2", "k2", "n2", "o2", ],["i3", "j3", "k3", "l3", "m3", "n3", "o3", "p3", ],["h4", "i4", "p4", "q4", ],["h5", "q5", ],["h6", "k6", "n6", "q6", ],["h7", "k7", "n7", "q7", ],["f8", "g8", "h8", "j8", "k8", "l8", "m8", "n8", "o8", "q8", "r8", "s8", ],["e9", "h9", "i9", "p9", "q9", "t9", ],["d10", "g10", "r10", "u10", ],["d11", "f11", "k11", "n11", "s11", "u11", ],["d12", "f12", "s12", "u12", ],["d13", "f13", "s13", "u13", ],["d14", "f14", "s14", "u14", ],["d15", "f15", "s15", "u15", ],["d16", "f16", "s16", "u16", ],["d17", "e17", "f17", "s17", "t17", "u17", ],["e18", "g18", "r18", "t18", ],["f19", "g19", "h19", "q19", "r19", "s19", ],["h20", "i20", "j20", "k20", "l20", "m20", "n20", "o20", "p20", "q20", ],[],[],]]

let forma=[[[],[],[],[],[],[],["g10", "g11", "g12", "g16", "g17", "g18", "g19", "g9", ],["h13", "h15", "h19", "h9", ],["i14", "i19", "i9", ],["j12", "j16", "j19", "j9", ],["k10", "k13", "k15", "k18", ],["l11", "l14", "l17", ],["m10", "m13", "m15", "m18", ],["n12", "n16", "n19", "n9", ],["o14", "o19", "o9", ],["p13", "p15", "p19", "p9", ],["q10", "q11", "q12", "q16", "q17", "q18", "q19", "q9", ],[],[],[],[],[]],["","0","0","0","0","0","3-4","2-1-1-1","1-1-1","1-1-1-1","1-1-1-1","1-1-1","1-1-1-1","1-1-1-1","1-1-1","1-1-1-1","3-4","0","0","0","0","0",""],[[],[],[],[],[],[],[],[],["g9", "h9", "i9", "j9", "n9", "o9", "p9", "q9", ],["g10", "k10", "m10", "q10", ],["g11", "l11", "q11", ],["g12", "j12", "n12", "q12", ],["h13", "k13", "m13", "p13", ],["i14", "l14", "o14", ],["h15", "k15", "m15", "p15", ],["g16", "j16", "n16", "q16", ],["g17", "l17", "q17", ],["g18", "k18", "m18", "q18", ],["g19", "h19", "i19", "j19", "n19", "o19", "p19", "q19", ],[],[],[]]]

let jake=[[[],["b10", "b11", "b12", "b13", "b14", "b15"],["c16", "c8", "c9"],["d16", "d17", "d18", "d19", "d7"],["e10", "e11", "e12", "e14", "e15", "e20", "e6"],["f10", "f11", "f12", "f13", "f21", "f5", "f9"],["g10", "g13", "g14", "g15", "g16", "g17", "g18", "g21", "g4", "g8", "g9"],["h13", "h19", "h22", "h4", "h8", "h9"],["i12", "i19", "i22", "i3", "i9"],["j10", "j11", "j16", "j17", "j18", "j22", "j3"],["k11", "k14", "k15", "k17", "k22", "k3"],["l11", "l14", "l15", "l17", "l22", "l3"],["m11", "m14", "m15", "m17", "m22", "m3"],["n10", "n11", "n16", "n17", "n18", "n22", "n3"],["o10", "o11", "o12", "o19", "o22", "o3", "o9"],["p10", "p13", "p19", "p22", "p4", "p8", "p9"],["q13", "q14", "q15", "q16", "q17", "q18", "q21", "q4", "q8", "q9"],["r12", "r13", "r21", "r5", "r9"],["s10", "s11", "s12", "s14", "s15", "s20", "s6"],["t16", "t17", "t18", "t19", "t7"],["u16", "u8", "u9"],["v10", "v11", "v12", "v13", "v14", "v15"]],["","6","2-1","1-4","1-3-2-1","1-5-1","1-3-6-1","1-2-1-1-1","1-1-1-1-1","1-2-3-1","1-1-2-1-1","1-1-2-1-1","1-1-2-1-1","1-2-3-1","1-4-1-1","1-3-1-1-1","1-2-6-1","1-1-2-1","1-3-2-1","1-4","2-1","6"],[[],[],["i3", "j3", "k3", "l3", "m3", "n3", "o3"],["g4", "h4", "p4", "q4"],["f5", "r5"],["e6", "s6"],["d7", "t7"],["c8", "g8", "h8", "p8", "q8", "u8"],["c9", "f9", "g9", "h9", "i9", "o9", "p9", "q9", "r9", "u9"],["b10", "e10", "f10", "g10", "j10", "n10", "o10", "p10", "s10", "v10"],["b11", "e11", "f11", "j11", "k11", "l11", "m11", "n11", "o11", "s11", "v11"],["b12", "e12", "f12", "i12", "o12", "r12", "s12", "v12"],["b13", "f13", "g13", "h13", "p13", "q13", "r13", "v13"],["b14", "e14", "g14", "k14", "l14", "m14", "q14", "s14", "v14"],["b15", "e15", "g15", "k15", "l15", "m15", "q15", "s15", "v15"],["c16", "d16", "g16", "j16", "n16", "q16", "t16", "u16"],["d17", "g17", "j17", "k17", "l17", "m17", "n17", "q17", "t17"],["d18", "g18", "j18", "n18", "q18", "t18"],["d19", "h19", "i19", "o19", "p19", "t19"],["e20", "s20"],["f21", "g21", "q21", "r21"],["h22", "i22", "j22", "k22", "l22", "m22", "n22", "o22", "p22"]]]
let q1=[[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],["r1", "r2", "r3", "r4"],["s1", "s4"],["t1", "t4"],["u1", "u2", "u3", "u4"],[]],["","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","4","1-1","1-1","4","0"],[["r1", "s1", "t1", "u1"],["r2", "u2"],["r3", "u3"],["r4", "s4", "t4", "u4"],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]]
let q2=[[[],[],[],["d1", "d2", "d3", "d4"],["e1", "e4"],["f1", "f4"],["g1", "g2", "g3", "g4"],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],["","0","0","4","1-1","1-1","4","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[["d1", "e1", "f1", "g1"],["d2", "g2"],["d3", "g3"],["d4", "e4", "f4", "g4"],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]]

level=["q1","q2","dino","panda","yoshi","jake"];
levelCounter=0;
picture=eval(level[levelCounter]);



//vibrazione
let vibrate=100;
$("#vibration").on("change",function(){
    if($(this).is(":checked")){
        vibrate=100;
    }
    else{
        vibrate=0;
    }
})


//nomi colonne
let letter=["a", "b", "c", "d", "e", "f", "g", "h", "i" , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s" , "t", "u", "v"]
//costruttore colonne
for(i=0;i<22;i++){
    let container=document.getElementById("container");
    let column=document.createElement("div");
    column.className="column";
    column.id=letter[i];
    container.appendChild(column);
    let label=document.createElement("div");
    label.className="label";
    label.id="label"+letter[i];
    //indicatori spazi
   label.innerHTML=picture[1][i];
    let etichetta=document.getElementById("etichetta");
    etichetta.appendChild(label);
    }
//costruttore celle
for(e=0;e<22;e++){
    let column=document.getElementById(letter[e]);
    if(letter[e]=="a"){
        for(c=1;c<23;c++){
            let cell=document.createElement("div");
            cell.className="cellV";
            cell.id=letter[e]+c;
            cell.innerHTML="";
            column.appendChild(cell)
        }
        }
        else{
            for(c=1;c<23;c++){
                let cell=document.createElement("div");
                cell.className="cell";
                cell.id=letter[e]+c;
                cell.style.backgroundColor=randomColor();
                column.appendChild(cell)
                }
            }
    }

//modificatore celle
$(".cell").on("click",function(){
    let list="blackCell_"+this.parentElement.id;
    let column=this.parentElement.id;   
    x=(this.id).slice(1);
    x1=(letter.indexOf((this.id).slice(0,1)));
    y="a"+x;
 
    if(this.style.backgroundColor!="white"){
        eval("th"+x).push(this.id);
        eval(list).push(this.id);
        this.style.backgroundColor="white";
        this.style.borderWidth="0px";
        this.style.transform="scale(1.05)"
        }
    else{
        if(eval("th"+x).includes(this.id)){
            x=(this.id).slice(1); eval("th"+x).splice(eval("th"+x).indexOf(this.id),1);
            }
            
        this.style.backgroundColor=randomColor();
        this.style.borderWidth="0.5px"
        this.style.transform="scale(1)"
        eval(list).splice(eval(list).indexOf(this.id),1)
            }
    if(multipleExist(eval("th"+x),picture[2][x-1])& multipleExist(picture[2][x-1],eval("th"+x))) {
        document.getElementById(y).style.backgroundColor="rgb(100,255,100)"
        navigator.vibrate(vibrate)
        }
    else{
      document.getElementById(y).style.backgroundColor="rgb(255,50,50)";
        
        }


    
    id="#"+column;

    if(multipleExist(eval("blackCell_"+column),picture[0][x1])&eval(list).length==picture[0][x1].length){ 
    
        //$(id).css("backgroundColor","green");
        $("#label"+column).css("backgroundColor","rgb(100,255,100)");
        finishedColumn+=1;
        navigator.vibrate(vibrate)
        $("#label"+column).css("color","white");
        }
    else{
        //$(id).css("backgroundColor","transparent");
        if($("#label"+column).css("backgroundColor")=="rgb(100, 255, 100)"){
        finishedColumn-=1;
        $("#label"+column).css("backgroundColor","rgb(50,70,150)")
        $("#label"+column).css("color","white");
        }
        }
    if(finishedColumn==21){
        $("#win").css("display", "block");
        next=document.createElement("button");
        next.innerHTML="NEXT LEVEL";
        next.id="next";
        next.style.left="130px";
        next.style.top="-130px";
        let buttons=document.getElementById("buttons");
        buttons.appendChild(next);
        $("#next").on("click",function(){
            reset();
            check();
            this.remove();
    })
    list="";
    }
    })


//confronto array
function multipleExist(arr, values) {
  return values.every(value => {
    return arr.includes(value);
  });
    }
//verifica
function verifica(){
    let prova="";
    for(h=0;h<22;h++){
    
        for (x=1;x<22;x++){
            column=letter[x];
            cellName=column+(h+1);
            cell=document.getElementById(cellName);
    
            if(picture[0][x].includes(cell.id)&&cell.style.backgroundColor!="white"){
                cell.style.backgroundColor="white";
                
                }
            else{
if(eval("blackCell_"+letter[x]).includes(cellName)==false){    
cell.style.backgroundColor=randomColor();
cell.style.border="0.5px solid rgba(100,100,100,0.3)"
cell.style.transform="scale(1)"
                }
                }
            }
        
        }
    
    }
$("#solution").on("touchstart",function(){
    verifica()
})
$("#solution").on("touchend",function(){
    verifica()
})
//verifica();
function randomColor(){
        r=Math.floor(Math.random()*4);
        g=Math.floor(Math.random()*10);
        b=Math.floor(Math.random()*20);
        color="rgb("+r+","+g+","+b+")"
        return color;
    }
 $(".label").on("touchstart",function(){
     let column="#"+(this.id).slice(5);
 $(column).css("transform", "scalex(1.1)")
 $(column).css("backgroundColor", "blue")
 $(column).css("border-left", "2px solid rgb(50,70,150)")
  $(column).css("border-right", "2px solid rgb(50,70,150)")
 $(column).css("z-index", "999")
 })
 $(".label").on("touchend",function(){
     let column="#"+(this.id).slice(5);
     
 $(column).css("transform", "scalex(1)")
 $(column).css("backgroundColor", "red")
 $(column).css("border", "0px solid red")
 $(column).css("z-index", "100")
 })

//checker
function check(){
finishedRow=0;
finishedColumn=0;
for(h=1;h<22;h++){
    label="#label"+letter[h];
    list=picture[0][h];
    if (list.length==0){
        finishedColumn+=1;
        $(label).css("backgroundColor", "rgb(100,255,100)")
    }
    else{
        $(label).css("backgroundColor", "rgb(50,70,150)")
    }
}
for(h=1;h<23;h++){
    label="#a"+h;
    list=picture[2][h-1];
    if (list.length==0){
    finishedRow+=1
        $(label).css("backgroundColor", "rgb(100,255,100)")
    }
    else{
    $(label).css("backgroundColor", "rgb(255,50,50)")
    }
}
}
check();
//reset
function reset(){
    let prova="";
    $("#win").css("display", "none");
    for(h=0;h<22;h++){
        if(eval("th"+(h+1)).length!=0)
        {
        eval("th"+(h+1)).splice(0,eval("th"+(h+1)).length);
        //console.log(eval("th"+(h+1)))
        }
        for (x=1;x<22;x++){
            listC=eval("blackCell_"+letter[x])
            listC.splice(0,listC.length);
            //console.log(listC)
            column=letter[x];
            cellName=column+(h+1);
            cell=document.getElementById(cellName);
    
            if(cell.style.backgroundColor!="white"){


                }
            else{
cell.style.borderWidth="0.5px";                cell.style.backgroundColor=randomColor();
cell.style.transform="scale(1)";
                }
            }
        
        }
    levelCounter+=1;
    picture=eval(level[levelCounter])
    for (i=0;i<22;i++){
        label="#label"+letter[i];
        $(label).html(picture[1][i])
    }
    }

}
