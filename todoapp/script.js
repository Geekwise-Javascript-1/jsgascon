
var theForm1 = document.getElementsByClassName('personal-info')[0];
var theForm2 = document.getElementsByClassName('list')[0];
var submitBtn = document.querySelector('input[type="submit"]');
var addBtn = document.getElementById('addfield');
submitBtn.addEventListener('click', getInputValues);
addfield.addEventListener('click', createField);

function getInputValues(e){
  e.preventDefault();
  var pinputs = [];
  for( var i = 0; i < theForm1.elements.length; i++){
    pinputs.push(theForm1.elements[i].value);
  }
  console.log(pinputs);

  var linputs = [];
  for( var i = 0; i < theForm2.elements.length-1; i++){
    linputs.push(theForm2.elements[i].value);
  }
  console.log(linputs);
}

var incNum = 1;
function createField(){
  var newLabel = document.createElement('label');
  newLabel.setAttribute("for", "generic"+incNum);
  newLabel.innerHTML = "Generic Label";

  var newInput = document.createElement('input');
  newInput.id = "generic"+incNum;
  newInput.name = "generic";
  newInput.type = "text";
  newInput.placeholder = "Generic Input Box";

  addToForm(newLabel, newInput);
  incNum++;
}
function addToForm(newLabel, newInput){
  newLabel.appendChild(newInput);
  theForm2.insertBefore(newLabel, addBtn);
}
