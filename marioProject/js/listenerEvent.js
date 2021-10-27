class Listener {
    start(){
        document.getElementById('butn').addEventListener('click',(e)=>{
           let err = document.getElementById("err");
           let PixelsHeight = document.getElementById("heith").value;
           let PixelsWidth = document.getElementById("width").value;
           let ph = document.getElementById("ph").value;
           let pw = document.getElementById("pw").value;
           let draws = document.getElementById("draws");
           draws.innerHTML=``


           let Draw = new Squars;
           Draw.show(PixelsHeight,PixelsWidth,ph,pw)

             



        })
     
    
    
    }
    }
    