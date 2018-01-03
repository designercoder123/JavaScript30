# Flex Panels Image Gallery

## Overview

We are provided with an html file which contains 5 panels which are arranged vertically and are crrently inactive. We have a `div` with class `.panels` this `div` contains five more `divs` with classes `.panel` and their respective `.panel#`. Each panel contains some text which we have to animate. Our objective is to only display the middle text and animate the ther two when the panel is clicked. This challenge is heavily focused on flexbox. If you dont know flexbox you can checkout WES's free course [Flexbox.io](https://flexbox.io/). 

## Guide

## CSS

* We first start with making the `display` of `.panels` class, a flex. This makes the panels align horizontally, leaving some space on the right. This is because the panels are not utilising the whole screen. 
  ```CSS
  // in the .panel class
  .panel{
    flex : 1;
   }
  ```
* Now we need to center the text. Since the text is the chil element of the class `.panel` we make this class a `flex`.
  ```CSS
  
   .panel{
      display : flex;
    }
  ```
    1. Now we want the child elements to be displayed as flex and we want them to be centered but have gaps between them so that they occupy the whole vertical space.
        ```CSS
        .panel > * {
          display : flex;  
          align-items : center;         // vertical align
          justify-content : center;     // horizontal align
          flex : 1;                    // occupy the vertical space
          }
       ```
    2. Time for some animations !
        1. First we want all the upper and lower texts to be hidden.
          ```CSS
          .panel > *: first-child {
            transform : translateY(-100%);
          }
          .panel > *:last-child {
            transform: translateY(100%);
          }
          ```
        2. As soon as we click any panel we want it to exapnd so the animation fr it is already given but we need to specify how far should it expand.
          ```CSS
          .panel.open{
            flex : 5;
           }
          ```
        3. Now as soon as we click the panel we want the texts to come back.
        ```CSS
        .panel.open-active > *:last-child {
          transform: translateY(0);
        }
        .panel.open-active > *:first-child {
          transform: translateY(0);
        }
        ```
   ### JS
    * Now we want to make the on click functions for the animations to take place.
      ```JS
      const panel = document.querySelectorAll(`.panel`);
      function toggleopen{
        this.classlist.toggle(`open`);
      }
      function toggleopenactive(e){
        if(e.propertyName.includes('flex'){     // we want to toggle this class only when our flex property changes.
        this.classList.toggle(`open-active`);
        }
      }
      panel.forEach(panel => panel.addEventListener('click',toggleopen);
      panel.forEach(panel => panel.addEventListener('transitionend',toggleopenactive);
      ```
   # And thats a wrap for day 5 !
     
