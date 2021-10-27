class Mandalot{

show(){
    let body= document.getElementById("draws").innerHTML=`
    <div class="h-w-100" id="canvasPlace">
    <canvas  id="myCanvas"></canvas>
    </div> `

    document.getElementById("menuDraw").innerHTML=`
    <button  id="colors">change to colors</button>
    <button class="realetiv butenQuit" id="windowOpen">MENU</button>
    <div class="heads" id="menuHead">

    <button id="randomMandala">random</button>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    height:

    <select  id="input1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
    width:
    <select  id="input2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
          <br>

    <button id="mandalaInputs">random</button>
   
    
        </div>  
        `

    let windows = new Windows;
    windows.back()
    let refresh = new Refresh;
    refresh.windowOpen()


    document.getElementById("randomMandala").addEventListener("click",()=>{
        let randomMandala = new RandomMandala;
        randomMandala.show()
    })
    document.getElementById("mandalaInputs").addEventListener("click",()=>{
              
        let n1 = document.getElementById("input1").value ;
        let n2 = document.getElementById("input2").value ;
        let mandala = new MandalaInputs;
        mandala.show(n1,n2)
    })
}
}