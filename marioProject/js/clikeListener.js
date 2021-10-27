class ClikeListener {
    start(){

             if(localStorage.getItem("is") =="true"){ 
                  if(localStorage.getItem("eventType")=="true"){
                      console.log("i am in")
                      document.querySelectorAll(".table_d").forEach((ele)=>{
                            ele.addEventListener('mouseover',(e)=>{
                            e.target.style.backgroundColor=localStorage.getItem("color");
                            return
                                   })
                 })
                }else if(localStorage.getItem("eventType")=="false"){
                    document.querySelectorAll(".table_d").forEach((ele)=>{
                      ele.removeEventListener('mouseover',(e)=>{ return })
                                   
                        ele.addEventListener('click',(e)=>{
                             e.target.style.backgroundColor=localStorage.getItem("color");
                                return
                            })
             })
                }
              
             }else{
                document.querySelectorAll(".table_d").forEach((ele)=>{
                ele.addEventListener('click',(e)=>{
                let random=  Math.floor(Math.random() * 255)+1;
                e.target.style.backgroundColor="rgba("+random+","+random+","+random+")";
             })
        })
    }

    
    }

    colorStart(){
        document.querySelectorAll(".color_table").forEach((ele)=>{
            ele.addEventListener("click",(e)=>{
            localStorage.setItem("color",e.target.id);
            localStorage.setItem("is","true");
            this.start()
            return
            })
        })
        

        document.getElementById("colorWriteSelect").addEventListener('click',(e)=>{
            let color =document.getElementById("colorTxt").value;
            if(color == ""){
                color = "white";
            }
            localStorage.setItem("color",color);
            localStorage.setItem("is","true");
            this.start()
            return
        })


   

    }
    }
    