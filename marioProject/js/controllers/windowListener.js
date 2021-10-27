class Windows {
    show(){
        document.getElementById("mandalot").addEventListener("click",(e)=>{
            let mandalot = new Mandalot;
            mandalot.show()
            
        })
       
    }
    back(){
        document.getElementById("colors").addEventListener("click",(e)=>{
           
            let main = new Main;
            main.show()
            let listener = new Listener;
            listener.start()
            let footer=new Footer;
            footer.show()
             
         })
    }
}