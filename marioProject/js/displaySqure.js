class Squars{

    show(h,w,ph,pw){ 
        let draws = document.getElementById("draws");
        for(let i = 0; i < h ; i++){
          let tr = document.createElement("tr");
          tr.className="table_row"
          tr.id="tr"+i;
          draws.appendChild(tr);

           for(let j = 0; j < w; j++){
            let randomcolor1=  Math.floor(Math.random() * 255)+1;
            let randomcolor2=  Math.floor(Math.random() * 255)+1;
            let randomcolor3=  Math.floor(Math.random() * 255)+1;


            let td = document.createElement("td");
            td.className="table_d"
            td.style.height=ph+"px"
            td.style.width=pw+"px"
            td.style.backgroundColor="rgb("+randomcolor1+","+randomcolor2+","+randomcolor3+")"

            td.id="td"+j;

            draws.appendChild(td);
           }
           draws.appendChild(tr);
        }
        let clickList = new ClikeListener;
        clickList.start();
        let reightClickListener = new RightClick;
        reightClickListener.start()
        let refresh = new Refresh;
        refresh.fillAll()
       
        
        }

}