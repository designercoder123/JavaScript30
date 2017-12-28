## CSS Variables and JS

We are provided with an HTML file which contains three controls: blur, spacing and color. We are also provided with an image whose properties are changeable using these controllers. We are suppose to write CSS and JS to make the web page functional.

# Guide
The goal of this project is to learn about CSS variables.  These are different from Sass-style variables; Sass variables are defined in the Sass file, but once compiled to CSS the values cannot be updated. So whats the advantage of CSS variables ? 
  * You can use them without the need of a preprocessor.
  * They cascade. You can set a variable inside any selector to set or override its current value.
  * When their values change (e.g. media query or other state), the browser repaints as needed.
  * You can access and manipulate them in JavaScript.
  In the html file we have the `input` tags which have a name property and we can create our own css variables with the same names and add some functionality using javascript.
# Steps

* CSS
  1. To make the css variables we declare them under `:root` that is because `:root` selects the highest level parent. 
    ```CSS
    :root{
      --blur : 10px;
      --spacing : 10px;
      --base : #ffc;
      }
    ```
    One thing to keep in mind is that the name of the variables should match the `name` attribute of the `input` element. 
    
  2. Now we need to attribute these variables to their respective css selectors.
  ```CSS
  img{
    padding : var(--spacing);
    filter : blur(var(--blur));
    background : var(--base);
    }
  ```
* JS

  Now we need to make this fuctional.
    1. In order to get started we first need to select all the elements are to be changed.
    ```JS
    const controls = document.querySelectorAll('.controls input');
    ```
    2. Now we need to make sure whenever we move the controllers the values are changing. Hence we add the eventListeners
    ```JS
      control.forEach(control=> control.addEventListener('change',change));
      control.forEach(control=> control.addEventListener('mousemove',change));
    ```
    3. Now we just need to create a function that tells the eventlistener what to do when the change is encountered.
    ```JS
      function change(){
         const suffix = this.dataset.sizing || '';
         document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
         }
    ```
    * What we did up there was that first, we created a suffix to store the data property that we had created 
      ```HTML
        <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px"> // sizing in this case;
      ```
    * Then we select each element based on the name and change its value.
  
  # All Done !
