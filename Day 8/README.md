# HTML5 Canvas
## Overview
We are to create a simple HTML canvas and add some stuff so that we can draw on it.

## Guide
 * To create a drawing area we need to create a canvas inside html.
    ```HTML
    <canvas id="canvas" width="800" height="800"></canvas>
    ```
 ### JS
 * Time to get started with some JS.
 * First we need to select the canvas and make some variables that woul helps us to draw.
   ```JS
    const canvas = document.querySelector('#draw');                // selecting the canvas
    const ctx = canvas.getContext('2d');                           // we declare this to make our canvas 2d/3d
    const slider = document.querySelector('.slider');             // myslider to change width of stroke (dont worry about this right now)
    canvas.width = window.innerWidth;                             // canvas width set to full width of screen
    canvas.height = window.innerHeight-100;                       // canvas height
    ctx.strokeStyle ='#BADA55';                                   // initial stroke color
    ctx.lineJoin = 'round';                                       // when lines join we want them to form a round surface
    ctx.lineCap ='round';                                         // the edges of strke should be round as well
    let isDrawing  =false;                                        // when to draw
    let lastx =0;                                                 // last recorded position of X
    let lasty =0;                                                 // last recorded position of Y
    let hue =0;
   ```
 * Follow these links to learn more about lineJoin and lineCap.
    1. [LineJoin](https://www.w3schools.com/tags/canvas_linejoin.asp)
    2. [LineCap](https://www.w3schools.com/tags/canvas_linecap.asp)
    3. [General Canvas Properties](https://www.w3schools.com/tags/ref_canvas.asp)
 * Next we need to add some event listeners to make it draw when we click to draw.
    ```JS
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
    });
    ```
    * when the user holds down the mouse and then moves the mouse we want the user to draw. Thats why we put `isDrwaing = true`.
 * Time for the draw Function.
    ```JS
    function draw(e){
        if(!isDrawing) return;                    // if isDrwaing is false do nothing
        console.log(e);
        ctx.strokeStyle = `hsl(${hue},100%,50%)`;   //keep changing strokecolor
        ctx.beginPath();                            // very important user wnt be able to draw without this 
        ctx.moveTo(lastx,lasty);                    // starting position of stroke
        ctx.lineTo(e.offsetX,e.offsetY);            // ening position of drawing
        ctx.stroke();                               // call the stroke function to make stroke visible
        lastx = e.offsetX;                          //updating locations
        lasty = e.offsetY;                          // //updating locations        
        hue++;
    }
    ```
    
    ## And thats a wrap 
    
    ## Extra 
      * Wes adds a variable to play with stroke of the width but i added a slider for that. 
    
    
 
