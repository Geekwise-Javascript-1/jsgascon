
var theForm1 = document.getElementsByClassName('personal-info')[0];
var theForm2 = document.getElementsByClassName('list')[0];
var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', getInputValues);

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
