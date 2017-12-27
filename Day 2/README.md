## DAY 2 - CSS and JS Clock

# Objective
Given a web page with an analog clock created with CSS, write the JavaScript necessary to make the clock functional. Make alterations to the CSS as necessary.

# Guide
The html file contains 3 div elements where each div corresponds to a certain hand.
```
<div class="hand hour-hand"></div>
<div class="hand min-hand"></div>
<div class="hand second-hand"></div>
```
# Steps
- CSS
    * The hands are laying flat and are oriented from left to right (which is th default orientation in html). We want the hands to be upright hence we apply `transform : rotate(90deg)` to the `.hand` class as an offset.
    * Now, we want the hands to turn just like they would in a real clock. But by default the hands would turn on the origin, which is great, but not we want right now so we offset the origin by `transform-origin : 100%` in the `.hand` class. this would put the origin on the right edge.
    * Almost done, now we just need the transition, so we apply the transition property to `.hand` class `transition : all, 0.05s`.
    * The fun part, you can set the way you the hands to turn. You can do this by applying `transition-timing-function: easy ease` or you can set your own by using `cubic-bezier()` property. 

- JS
   * Declare & define variables for each clock hand and reference the corresponding HTML element.
   Eg. ` const secondHand = document.querySelector('.second-hand')`
   * Now we have to move the hands of the clock by certain degrees. Now for this there are two options :
      1. We could work through fr each hand separately. Example :
      ```
      const time = new Date();
      const seconds = time.getSeconds();
      const secdegree = ((seconds/60)*360) + 90;  // we add a 90 because in the CSS above we added an offset og 90 degrees.
      ```
      2. We could simply create a function which takes in the time value and the max it has to cover (60 for seconds). Example :
      ```
      function calcdeg(time,turn)
      {
         return ((time/turn)*360) +90;
       }
       ```
   * Now we need a function that would call the setDate function every second to update the time. For this we use `setInterval(setDate,1000)`. In the main function body we need to tranform the angle each hand is turning. 
   
   ```
      const secHand = document.querySelector('.second-hand');
      const minHand = document.querySelector('.min-hand');
      const hourHand = document.querySelector('.hour-hand');
      function getDate(){
          const time = new Date();
          const seconds = time.getSeconds();
          const secondDegrees = ((seconds/60)*360)+90;
          secHand.style.transform = `rotate(${secondDegrees}deg)`;
          const min = time.getMinutes();
          const hr = time.getHours();
          const mindeg = ((min/60)*360)+90;
          minHand.style.transform = `rotate(${mindeg}deg)`;
          const hrdeg = ((hr/12)*360)+90;
          hourHand.style.transform = `rotate(${hrdeg}deg)`;
          console.log(time.getHours());
      }
      setInterval(getDate,1000);
  ```
  
  * If you choose to go with the second method just call the function wherever the degree is being calculated.
  
  # Awesome ! its done !
  
  # Problems with the above code 
  
  * If you follow this method you will notice that when the second hand completes a full rotation, it snaps a little and then continues. This happens because we are creating the date object every second. So when the second hand reaches 12 it creates a new date object and the second value is turned to zero which inturn affects the degree and sets the degree to zero, hence the snap !
  
  To fix this ( i will add the new html ) we could do this :
  ```
  const secHand = document.querySelector('.second-hand');
      const minHand = document.querySelector('.min-hand');
      const hourHand = document.querySelector('.hour-hand');
      const time = new Date();
          const seconds = time.getSeconds();
          const secondDegrees = ((seconds/60)*360)+90;
          const min = time.getMinutes();
          const hr = time.getHours();
          const mindeg = ((min/60)*360)+90;
          const hrdeg = ((hr/12)*360)+90;
      function getDate(){
          secondDegrees = secondDegrees + 6;
          mindeg = mindeg + (6/60);
          hrdeg = hrdeg + (30/3600);
          secHand.style.transform = `rotate(${secondDegrees}deg)`;
          minHand.style.transform = `rotate(${mindeg}deg)`;
          hourHand.style.transform = `rotate(${hrdeg}deg)`;
      }
      setInterval(getDate,1000);
   ```
   What happens here is we just call the date object once in the beginning after that the hands are updated by simple math. This way secon hand never turns back to zero.
   
   # Thats It ! Yay !

