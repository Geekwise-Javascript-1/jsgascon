
var submit = document.querySelector('input[type="submit"]');

function getInputVals(e){
  e.preventDefault();
  var inputs = [];
  for( var i = 0; i < theForm.elements.length - 1; i++){
    inputs.push(theForm.elements[i].value);
  }
  console.log(inputs);
}

function createUL(array){
  var list = document.createElement('ul'); // Create the list element

  for(var i = 0; i < array.length; i++) {
    var item = document.createElement('li'); // Create the list item
    item.appendChild(document.createTextNode(array[i])); // Set its contents
    list.appendChild(item); // Add it to the list
    }
    return list;   // Return the constructed list
}
submit.addEventListener('click', getInputVals);

createUL();
