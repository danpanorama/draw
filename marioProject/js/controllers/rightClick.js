class RightClick {

   start(){
document.querySelectorAll(".table_d").forEach((ele)=>{
    ele.oncontextmenu= function(e){
        

        console.log(e.target.style.backgroundColor)
        localStorage.setItem("color",e.target.style.backgroundColor)
        localStorage.setItem("is","true")
        let startsNew = new  ClikeListener;
        startsNew.start()
    }
})
   }
      
    }
    