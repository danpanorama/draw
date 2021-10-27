class ColorDisplay{

    show(){ 
        let colorArry = ["red","green","blue","yellowgreen","orangered","tomato","yellow"]
        let menu = document.getElementById("colorSelectorEaze");

        for(let i = 0; i < colorArry.length ; i++){
          let tr = document.createElement("tr");
        //   tr.className="color_table_row"
        //   tr.id=colorArry[i];
        //   tr.style.backgroundColor=colorArry[i];
        //   menu.appendChild(tr);
           for(let j = 0; j < colorArry.length; j++){
            let td = document.createElement("td");
            td.className="color_table"
            td.style.height="15px"
            td.style.width="15px"
            td.style.backgroundColor=colorArry[j]
            td.id=colorArry[j];
            menu.appendChild(td);
           }
           menu.appendChild(tr);
        }
        let clickList = new ClikeListener;
        clickList.colorStart();
       
        
        }

}