// Homework: Create a dynamically generated form
//
// 1. When user clicks the “add more” button, a new input should be appended BEFORE the form submit button
// 2. The input needs to only be a generic type=“text”
// 3. When “submit” button is pressed, each press outputs to the console an array of all input values


var submitBtn = document.getElementById('submit');
var form = document.getElementsByTagName('form')[0];
submitBtn.onclick = getVals;

var addbtn = document.getElementById('btn'); // makes the add button functional to add a new form
var addform = document.getElementsByTagName('label')[4]; // adds new form in the location before submit button
addbtn.onclick = addInput; // jumps to the function to insert a form box

function getVals(e){
    e.preventDefault();
    var valArr = [];
    for(var i = 0; i < form.elements.length; i++){
        valArr.push(form.elements[i].value);
    }
    valArr.pop();
    console.log(valArr);
}

var inputEl = document.createElement('input');
inputEl.id = 'newId';
inputEl.name = 'new';
inputEl.type = 'email';
inputEl.placeholder = 'example@email.com';
form.appendChild(inputEl);

console.log(inputEl);

function addInput(){
  var newInputEl = document.createElement('input');
  newInputEl.id = 'addId';
  newInputEl.name = 'addName';
  newInputEl.type = 'text';
  newInputEl.placeholder = "Enter new data";
  addform.appendChild(newInputEl);

  // console.log(newInputEl);
}
