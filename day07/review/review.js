var theForm = document.getElementsByTagName('form')[0],
    submit = document.querySelector('input[type="submit"]'),
    addField = document.getElementsByTagName('button')[0];

console.log(addField);

var incNum = 1;
function createField(){
  var newLabel = document.createElement('label');
  newLabel.setAttribute("for", "generic"+incNum);
  newLabel.innerHTML = "Generic Label";
  // newLabel.textContent

  var newInput = document.createElement('input');
  newInput.id = "generic"+incNum;
  newInput.name = "generic";
  newInput.type = "text";
  newInput.placeholder = "Generic Input Box";

  // document.body.appendChild(newLabel);
  addToForm(newLabel, newInput);
  incNum++;
}

function addToForm(newLabel, newInput){
  newLabel.appendChild(newInput);
  // theForm.appendChild(newLabel);
  theForm.insertBefore(newLabel, submit);
}

addField.addEventListener('click', createField);

function getInputVals(e){
  e.preventDefault();
  var inputs = [];
  for( var i = 0; i < theForm.elements.length - 1; i++){
    inputs.push(theForm.elements[i].value);
  }
  console.log(inputs);
}

submit.addEventListener('click', getInputVals);
