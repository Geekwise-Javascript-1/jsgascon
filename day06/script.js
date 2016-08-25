// var input1 = document.getElementById('input1');
// var inputs = document.getElementsByClassName('input');
// console.log(input1);
// console.log(inputs);


// // target btn
// // create function for btn
// // console value of inputs
// var input1 = document.getElementById('input1');
// var inputs = document.getElementsByClassName('input');
// var btn = document.getElementById('btn');
//
// function getInputs(){
//   for(var i = 0; i < inputs.length; i++){
//     console.log(inputs[i].value);
//   }
//
// }
// btn.onclick = getInputs;


// var input1 = document.getElementById('input1');
//
// var inputs = document.getElementsByClassName('input');
//
// var inputsTag = document.getElementsByTagName('input');
//
// var btnEl = document.querySelector('button[type="button"]');
//
// var btnEls = document.querySelectorAll('label input');
//
// var btn = document.getElementById('btn');
//
// function getInputs(){
//   for(var i = 0; i < inputs.length; i++){
//     console.log(inputs[i].value);
//   }
//
// }
// btn.onclick = getInputs;
// console.log(btnEls);


// // FORMS
// var submitBtn = document.getElementById('submit');
// // var form = document.getElementsByTagName('form');
// var form = document.getElementsByTagName('form')[0];
//
// submitBtn.onclick = getVals;
//
// function getVals(e){
//   e.preventDefault();
//   console.log(form.elements);
//   console.log(form);
//   // console.log(e);
//   // alert('getting the values');
// }


// // FORMS
// var submitBtn = document.getElementById('submit');
// var form = document.getElementsByTagName('form')[0];
//
// submitBtn.onclick = getVals;
//
// function getVals(e){
//   e.preventDefault();
//   // console.log(form.elements);
//   for(var i = 0; i < form.elements.length; i++){
//     console.log(form.elements[i].value);
//   }
// }
//
// var lis = document.getElementsByTagName('li');
// for(var i = 0; i < lis.length; i++){
//   lis[i].addEventListener('click', function(e){
//     console.log(e);
//     // console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(this);
//     // alert(lis[i].textContent);
//   });
//
// }
// console.log(lis);


// // FORMS
// var submitBtn = document.getElementById('submit');
// var form = document.getElementsByTagName('form')[0];
//
// submitBtn.onclick = getVals;
//
// function getVals(e){
//   e.preventDefault();
//   // console.log(form.elements);
//   for(var i = 0; i < form.elements.length; i++){
//     console.log(form.elements[i].value);
//   }
// }
//
// var lis = document.getElementsByTagName('li');
// for(var i = 0; i < lis.length; i++){
//   lis[i].addEventListener('click', function(e){
//     console.log(e.currentTarget.textContent);
//     console.log(e.target.textContent);
//     console.log(this.textContent);
//   });
// }


// logName('joseph');
// function logName(name){
//   console.log(name);
// }

// foo('joseph');
// console.log(foo);


// var foo = function(name){
//   console.log(name);
// }('joseph');


// var foo = function(){
//   console.log(arguments[1]);
// }('joseph', 5, ['green', 'day', 3]);


// current for output includes submit button value
// modify code to remove submit button from array
// output array to console
// // FORMS
// var submitBtn = document.getElementById('submit');
// var form = document.getElementsByTagName('form')[0];
//
// submitBtn.onclick = getVals;
//
// function getVals(e){
//   e.preventDefault();
//   for(var i = 0; i < form.elements.length-1; i++){
//     console.log(form.elements[i].value);
//   }
// }
//
// var lis = document.getElementsByTagName('li');
// for(var i = 0; i < lis.length; i++){
//   lis[i].addEventListener('click', function(e){
//     console.log(e.currentTarget.textContent);
//     console.log(e.target.textContent);
//     console.log(this.textContent);
//   });
// }


// // current for output includes submit button value
// // modify code to remove submit button from array
// // output array to console
// // FORMS
// // var submitBtn = document.getElementById('submit');
// var form = document.getElementsByTagName('form')[0];
//
// // submitBtn.onclick = getVals;
//
// function getVals(e){
//   e.preventDefault();
//   var valArr = [];
//   for(var i = 0; i < form.elements.length-1; i++){
//     valArr.push(form.elements[i].value);
//     // console.log(form.elements[i].value);
//   }
//   // valArr.pop();
//   console.log(valArr);
// }
//
// var lis = document.getElementsByTagName('li');
// for(var i = 0; i < lis.length; i++){
//   lis[i].addEventListener('click', function(e){
//     console.log(e.currentTarget.textContent);
//     console.log(e.target.textContent);
//     console.log(this.textContent);
//   });
// }
//
// // var foo = function(){
// //   console.log(arguments[1]);
// // }('joseph', 5, ['green', 'day', 3]);
//
// var inputEl = document.createElement('input');
// inputEl.id = 'newId';
// inputEl.name = 'new';
// inputEl.type = 'email';
// inputEl.placeholder = 'example@email.com';
// // document.body.appendChild(inputEl);
// form.appendChild(inputEl);
//
// console.log(inputEl);


// FORMS
// var submitBtn = document.getElementById('submit');
var form = document.getElementsByTagName('form')[0];

// submitBtn.onclick = getVals;

function getVals(e){
  e.preventDefault();
  var valArr = [];
  for(var i = 0; i < form.elements.length-1; i++){
    valArr.push(form.elements[i].value);
    // console.log(form.elements[i].value);
  }
  // valArr.pop();
  console.log(valArr);
}

var lis = document.getElementsByTagName('li');
for(var i = 0; i < lis.length; i++){
  lis[i].addEventListener('click', function(e){
    console.log(e.currentTarget.textContent);
    console.log(e.target.textContent);
    console.log(this.textContent);
  });
}

// var foo = function(){
//   console.log(arguments[1]);
// }('joseph', 5, ['green', 'day', 3]);

var inputEl = document.createElement('input');
inputEl.id = 'newId';
inputEl.name = 'new';
inputEl.type = 'email';
inputEl.placeholder = 'example@email.com';
// document.body.appendChild(inputEl);
form.appendChild(inputEl);

console.log(inputEl);

// on "click to add more" button
// append new instance of inputEl to form

// add submit button back into form
// ensure that each instance is appended BEFORE submit
// modify every dynamic input to be text
// on submit, output to console new array of values
