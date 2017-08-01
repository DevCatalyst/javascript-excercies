function addItemToUl(id, item) {
  var ul = document.getElementById(id);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
}
addItemUl('shopping-list', 'Milk')
addItemUl('shopping-list', 'Shoes')
addItemUl('shopping-list', 'Cake')
addItemUl('shopping-list', 'Pens')
addItemUl('shopping-list', 'Chicken')