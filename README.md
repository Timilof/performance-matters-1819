# Performance Matters @cmda-minor-web · 2018-2019

In the first week I turned my OBA site into a server side rendering app, it was previously only client-side renderen and would cease to function if javascript was off. To achieve this I used NodeJS.
The data i use to render my page is fetched from a json file made by [mennau]([https://github.com/Mennauu).



### Before performance enhancements on slow 3G
When I tested my OBA site on slow 3G the app took 31 seconds till it was fully rendered.
[img]()

First paint on client side rendering is after 5.1 seconds

### After minification on slow 3G
It takes the app 9.2 seconds till it's fully rendered
[img]()


first paint in the minified css server side version is after 2.13 seconds.

### After caching on slow 3G
It takes the app 8.5 seconds till it's fully rendered 
[img]()


first paint in the server side version with cahce and minified css stays the same at 2.13 seconds.

#### Feature wishlist
  make the first paint happen sooner
  ttfb should be shorter/sooner
  Find a way to make images render quicker/ or placeholder images/ lazy loading?


<!-- Add a link to your live demo in Github Pages 🌐-->
