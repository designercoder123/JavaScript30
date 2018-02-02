# Hold Shift to Select Multiple Items

## Overview 
We need to implement a small checklist project in which we can select multiple items by just holding down shift. Its the same idea that is used in gmail and many other websites, so it is a good thing to know and have under yur hood.

## Guide

Ok! Lets get started !

First of all, i watched the video and tried to implement the method, but that didnt workout i guess there was some flaw which i coulnd't figure out, so i pivoted and implemented my own solution.

### Getting started

* First we want to add an id or className to our checkboxes.

```HTML
<input type = "checkbox" id="0">
 OR
<input type ="checkbox" class ="0">
```
* Next we hop onto JS.
  * ### Looking into the logic
    * The logic is pretty starightforward. 
    * So lets consider an array of integers 
      ```JS
      let arr = [false,false,false,false];
      ```
      Now, we need to go over each element of the array and as we go over them they turn `true` and if you jump one or more elements
