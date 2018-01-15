const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');
    const slider = document.querySelector('.slider');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-100;
    ctx.strokeStyle ='#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap ='round';
   // ctx.lineWidth = slider.value;
    let isDrawing  =false;
    let lastx =0;
    let lasty =0;
    let hue =0;
    function draw(e){
        if(!isDrawing) return;
        console.log(e);
        ctx.strokeStyle = `hsl(${hue},100%,50%)`;
        ctx.beginPath();
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke();
        lastx = e.offsetX;
        lasty = e.offsetY;
        hue++;
    }
    canvas.addEventListener('mousemove',draw);
    canvas.addEventListener('mousedown',(e) => {
        isDrawing = true;
        lastx = e.offsetX;
        lasty = e.offsetY;
    });
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
    slider.addEventListener('change',() =>{
        ctx.lineWidth = slider.value;
    })
    
