# Hold Shift to Select Multiple Items

## Overview 
We need to implement a small checklist project in which we can select multiple items by just holding down shift. Its the same idea that is used in gmail and many other websites, so it is a good thing to know and have under yur hood.

## Guide

Ok! Lets get started !

First of all, i watched the video and tried to implement the method, but that didnt workout i guess there was some flaw which i coulnd't figure out, so i pivoted and implemented my own solution.

### Getting started

* First we want to add an id or className to our checkboxes.

```HTM
<input type = "checkbox" id="0">
 OR
<input type ="checkbox" class ="0">
```
* Next we hop onto JS.
  * First we need to select all the checkboxes.
    ```JS
    const check = document.querySelectorAll('.checkboxes');
    ```
  * Now, since we have all the checkboxes we need to add an event listener that listens for the click on the checkbox.
    ```JS
    check.addEventListener('click',checked);
    ```
  * Lets create a variable `lastChecked` to store the lastchecked checkbox.
    ```JS
    let lastChecked;
    ```
  * Now, lets create the function `checked`.
    ```JS
    function checked(e){
    }
    ```
  * Next, we want to add a conditional statement in our function to check if the user was holding the shift button when he checked a checkbox. We also need a variable to check for the inbetween elements.
    ```
    // inside the function
    let inBetween = false;
    if(e.shiftKey && this.checked)
    {
    }
    ```
  * Great ! now we want to
