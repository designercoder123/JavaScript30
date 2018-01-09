# AJAX TYPE AHEAD 

## Overview

We are given an HTML file with an `input` and two `list items`. Our goal is to make an ajax type head by coding in the javascript.

## Guide 
We directly start with the JS as we are provided with most of CSS and HTML. Although if want to go deep in the code you might want to look out for the styling od the `.suggestions` class.
```CSS
.sugestions{
  display : flex;
  justify-content: space-between;
  }
```
* At first this may seem out of place and yu might want to remove it but when you finish the project you would see some weird spacing in the resulting `li` and to compensate with that we have used the above code.

### JS

There are alot of things you need to know/learn while making this small but useful project.
Some links you might find useful for this project :
* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
* [Match()](https://www.w3schools.com/jsref/jsref_match.asp)

* Since we are dealing with external API we need to first get the url.
  ```JS
    const url = 'const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  ```
* Ths gives us the data. Now we need to take this data and use it for our project. So how do we go about it ? 
    * First, we need to fetch the data from the server. This we will do with `fetch` method but can also be done with the old `xhr` method.
      ```JS
      let cities = [];
      fetch(url)
      .then(response => response.json())
      .then(data => (cities = data));
      ```
      Here i first created an array to store the data that we will recieve from the api. 
      Second, i ued the fetch method to get the data from the api. But if you want to go by the `XHR` way here it is :
      ```JS
      let cities = [];
      var xhr = new XMLHttpRequest();
      xhr.open('GET',url,true);
      xhr.onload = function(){
      if(this.status === 200){
      cities = JSON.parse(this.response);
      }
      }
      ```
    * Once we are done with this we are sure that we have our data ! Now we just need to make sure when we type we get the response as `list`.
    ```JS
    const input = document.querySelector('.search');
    const sug = document.querySelector('.suggetions');
    ```
    * Now lets make a function that would match the wor with the cities or states as the user types in.
    ```JS
    function wordMatch(word,cities){
     return cities.filter(place => {
      const regex = new RegExp(word,'gi');
      return place.city.match(regex) || place.state.match(regex);
      }
    ```
    * This would return the filtered array. Now we want to add an `Eventlistener` to the `input` so that this funcion could be called whenever the user types.
    ```JS
    input.addEventListener('keyup',displayMatch);
    ```
    * Final step is to create the display function that would return the array.
    ```JS
    function displayMatch(){
    const finArray = wordMatch(this.value,cities);
    const output = finArray.map(place => {
    const cityName = place.city.replace(regex,`<span class ="hl">${this.value}</span>`);
    const StateName = place.state.replace(regex,`<span class ="hl">${this.value}</span>`);
    `
    <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${palce.population}</span>
    </li>
    `;
    )}.join('');
    sug.innerHTML = ouput;
    ```
    * One last thing would be to get the population displayed correctly with commas.
    ```JS
       function numberWithCommas(x) {
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    ```
    ## That's all for the Day !
      
      
