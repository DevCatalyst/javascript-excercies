function addItemToUl(id, item) {
  var ul = document.getElementById(id);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
}
// use the above fuction to add items to the shopping list
// Your code goes below...