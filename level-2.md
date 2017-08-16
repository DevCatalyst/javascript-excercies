# Level 2 - Meet my friend DOM

With Javascript, you'll modify what the user sees a lot. You'll be displaying content in dropdown menus or adding items to to-do lists.

## Welcome to Document
The layer of the browser that users see, inside the DOM, is called the Document.

## Wait! What is the DOM?
DOM is a list of nodes that make up the page you see. Document is one of the nodes in the list.

## Add to a shopping list
You access the Document elements on your page like this:
/// HTML
```html
<ul id="shopping-list">
  <!-- JS will add items here -->
</ul>
```
/// Javascript
```js
// adds <li> elements inside <ul>
function addItemUl(id, text) {
  var ul = document.getElementById(id);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
}
addItemUl('shopping-list', 'Milk');
addItemUl('shopping-list', 'Shoes');
addItemUl('shopping-list', 'Cake');
addItemUl('shopping-list', 'Pens');
addItemUl('shopping-list', 'Chicken');
```
/// HTML output (DOM Document)
```html
<ul id="shopping-list">
  <li>Milk</li>
  <li>Shoes</li>
  <li>Cake</li>
  <li>Pens</li>
  <li>Chicken</li>
</ul>
```
See the above in CodePen:


## Exercise #1
Let's put this to practice in Cloud9
- open you `exercises/level-2/exercise-1.js`
- use the given fuction to add items to the `ul#shopping-list`
- test your code at `exercises/level-2/exercise-1.html`
- when done, push your changes to Github to be graded

## Exercise #2
Let's put this to practice in Cloud9
- open you `exercises/level-2/exercise-2.js`
- use the given fuction to remove items from the `ul#shopping-list`
- test your code at `exercises/level-2/exercise-2.html`
- when done, push your changes to Github to be graded

## Next up
Start [Level 3](level-3.md) - ???
