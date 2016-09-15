
// get the input values from the box container
function getInputValues() {
  item.focus();
  item.select();

  var list = new Array;
  var itemStr = localStorage.getItem('storeList');
  if (itemStr !== null) {
    list = JSON.parse(itemStr);
  }
  return list;
}

// add the new item or action to the array list and storage
function add() {
  var item = document.getElementById('item').value;

  var list = getInputValues();
  list.push(item);
  localStorage.setItem('storeList', JSON.stringify(list));

  display();
  return false;
}

// remove the chosen item or action from the array list and storage
function remove() {
  var id = this.getAttribute('id');
  var list = getInputValues();
  list.splice(id, 1);
  localStorage.setItem('storeList', JSON.stringify(list));

  display();
  return false;
}

// update or change the item or action from the array list and storage
function update() {
  var id = this.getAttribute('id');
  var list = getInputValues();
  list.splice(id, 1);
  localStorage.setItem('storeList', JSON.stringify(list));

  var newText = prompt("What should this item be renamed?");
  var item = newText;
  list.splice(id, 0, item);
  localStorage.setItem('storeList', JSON.stringify(list));

  display();
  return false;
}

// To print the item or action list on html
function display() {
  var list = getInputValues();

  // construct the html to display on the screen
  var html = '<ul>';
  for(var i = 0; i < list.length; i++) {
    html += '<li>' + '['+ i + ']. ' + list[i] + '<button class="delBox" id="' + i + '">Delete</button>' + '<button class="upBox" id="' + i + '">Update</button> </li>';
  };
  html += '</ul>';
  document.getElementById('list').innerHTML = html;

  // the delete button
  var delbox = document.getElementsByClassName('delBox');
  for (var i = 0; i < delbox.length; i++) {
    delbox[i].addEventListener('click', remove);
  };

  // the update button
  var updatebox = document.getElementsByClassName('upBox');
  for(var i = 0; i <updatebox.length; i++){
    updatebox[i].addEventListener('click', update);
  }

}

var start = document.getElementById('add');
start.addEventListener('click', add);
display();
