function removeItemToUl(id, num) {
  var ul = document.getElementById(id);
  var li = ul.getElementsByTagName("li")[num];
  li.remove();
}
// use the above fuction to add items to the shopping list
// Your code goes below...