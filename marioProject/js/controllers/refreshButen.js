    class Refresh {
    

        colorStart(){
            document.getElementById("refreshButn").addEventListener("click",(e)=>{
                localStorage.setItem("is","false");
                localStorage.setItem("eventType","false");
                console.log(localStorage.getItem("eventType"))
                let colors = new ClikeListener; 
                colors.start()
                return
            })
        
        }
        typeSelector(){
            document.getElementById("hover").addEventListener("click",(e)=>{
                localStorage.setItem("eventType","true");
                let colors = new ClikeListener;
                colors.start()
            })
        }

        fillAll(){
            document.getElementById("fiilAll").addEventListener("click",(e)=>{  
                document.querySelectorAll(".table_d").forEach((ele)=>{
                    ele.style.backgroundColor="white"; 
                })
            
            })

            document.getElementById("fiilAllcolor").addEventListener("click",(e)=>{  
                let color = document.getElementById("colorName").value;
                if(color == ""){
                    color = "white";
                }
                document.querySelectorAll(".table_d").forEach((ele)=>{
                    ele.style.backgroundColor=color; 
                })
            
            })
        }
        windowOpen(){
            let flag=false;
            document.getElementById("windowOpen").addEventListener('click',()=>{
                if(flag ==false){
                    let menu= document.getElementById("menuHead");
                            menu.style.opacity="0";
                            setTimeout(()=>{
                            menu.style.width="0";
                            },1000)
                           
                            flag=true;
                }else{
                    let menu= document.getElementById("menuHead");
                    menu.style.width="auto";
                    setTimeout(()=>{
                     menu.style.opacity="1";   
                        },1000)
                    
                    flag=false;
                }
            
            })
        }

        }
        