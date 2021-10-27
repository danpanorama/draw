class ColorRGB{

    show(){ 
        let color =[0,1,2];
        let menu = document.getElementById("colorSelector");

           for(let i = 0; i<= 2; i++){
            let tr = document.createElement("tr");
            for(let j = 0; j < 255; j++){
                let td = document.createElement("td");
                td.className="color_table";
                td.style.height="15px";
                td.style.width="15px";
                color[i]=j;
                td.style.backgroundColor="rgb("+color[0]+","+color[1]+","+color[2]+")";
                td.id="rgb("+color[0]+","+color[1]+","+color[2]+")";
                menu.appendChild(td);

            }
           }


        

        }

}