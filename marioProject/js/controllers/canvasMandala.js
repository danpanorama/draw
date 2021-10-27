class RandomMandala{
    show(){
       
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width=500;
canvas.height = 500;

const slides = Math.floor((Math.random() * 10) + 3);


const maxLevel = 5;
const branches = 2;

ctx.translate(canvas.width/2,canvas.height /2);

const angle = Math.PI * 2 * 0.85;

function drawLine(level){
    if(level > maxLevel)return;

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(200, 0);
    ctx.stroke();

    for(let i = 0; i< branches +1 ; i++){
        ctx.save();
        ctx.translate(200*i/(branches + 1 ),0);
        ctx.scale(0.5,0.5);
        ctx.save();

        ctx.rotate(angle);
        drawLine(level + 1);
        ctx.restore();
        ctx.save();

        ctx.rotate(-angle);
        drawLine(level + 1);
        ctx.restore();

        ctx.restore();



    }
    
}
for(let i = 0; i<slides; i++){
    drawLine(0);
    ctx.rotate(Math.PI * 2 / slides);
}


    }
}