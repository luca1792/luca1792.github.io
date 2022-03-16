        function njump(){
            pos.style.animation="";
            zampasx.style.animation="top1 2s infinite";
            zampadx.style.animation="top 2s infinite";
        }
        function jump(){
            let pos=document.getElementById("pos");
            let zampasx=document.getElementById("zampasx");
            let zampadx=document.getElementById("zampadx");
            pos.style.animation="jump 1s 1";
            zampasx.style.animation="jumpz1 1s 1";
            zampadx.style.animation="jumpz 1s 1";
            myTo=setTimeout(njump,1000)
        
        }
