class MenuDraw{

    start(){
        document.getElementById("menuDraw").innerHTML=`
      <button class="realetiv butenQuit" id="windowOpen">MENU</button>
    <div  class="heads" id="menuHead">
     

        <label for="cars">select how many squrts:</label>
<br>
        height:
        <select name="pixel" id="heith">
            <option value="50">50</option>
            <option value="70">70</option>
            <option value="100">100</option>
            <option value="100">200</option>
            <option value="300">300</option>
          </select>
          <br>
  width:
        <select name="pixel" id="width">
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="100">200</option>
          <option value="300">300</option>
        </select>
        <br>
        

<br>
        <label for="cars">select how many squrts:</label>
        <br>
                pixel height:
                <select name="pixel" id="ph">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                  <br>
                  pixel width:
          <select name="pixelWidth" id="pw">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
                <br>
                <br>
                <button id="butn">refresh</button>
                <br>
                <br>
                <label for="colorWell">Color:</label>
                <input type="color" value="#ff0000" name="picker" id="colorWell">
                <br>
                <br>
                <h3>select color</h3>

                <div class="flex-center">
                    <div id="colorSelector" class="colorSelector">
                    </div>
                </div>
                <br>
                <div class="flex-center"> 

              <div id="colorSelectorEaze">
                

              </div>
            
              </div>
              <button id="refreshButn">stop hover</button>
              <button id="hover">hover</button>


              <button id="fiilAll">all white</button>
              <br>
              <br>
              <br>
              <button id="fiilAllcolor">fill white color you like</button>
              <br>enter color name or code white "#": <br>
              <input type="text" id="colorName">
              <br>
              <br>
              <br>
              <button id="colorWriteSelect">write color</button>
              <br>enter color name or code white "#": <br>
              <input type="text" id="colorTxt">
              <br>
            
    
              <br>
              <br>
            <button id="dragover" onclick="dragFunction(event)">drag</button>
          </div>  
        
        `
    }


}