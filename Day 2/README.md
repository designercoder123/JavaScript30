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
  
