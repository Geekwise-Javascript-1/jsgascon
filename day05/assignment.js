// create js object for input1, input2, btn, div
// after user input values for input1 & input2
// user clicks go
// input1 value replaced with text "Hello Javascript!"
// alert new value of input1
// replace div text with value of input2

// var btn = document.getElementById('btn');
//
// function btnClick(){
//     getUserInput1();
//     alert('Hello Javascript!');
//     getUserInput2();
// }
// btn.onclick = btnClick;
//
// function getUserInput1(){
//   // Get user input1 value
//   var changeinput1 = document.getElementById('input1').value;
//   console.log(changeinput1);
//   // Change user input1 value
//   var changeinput1 = document.getElementById('input1').value = "Hello Javascript!";
//   console.log(changeinput1);
// }
// function getUserInput2(){
//   // Get user input2 value
//   var changeinput2 = document.getElementById('input2').value;
//   console.log(changeinput2);
//   // Get textbox value
//   var changetextbox = document.getElementById('textbox').innerHTML;
//   console.log(changetextbox);
//   // Change textbox value to user input2
//   var changetextbox = document.getElementById('textbox').innerHTML = changeinput2;
//   console.log(changetextbox);
// }

var inp1 = document.getElementById('input1');
var inp2 = document.getElementById('input2');
var btn = document.getElementById('btn');
var output = document.getElementById('output');

function btnClick(){
  inp1.value = "Hello JavaScript!";
    alert( inp1.value );
    output.textContent = inp2.value;
    // output.innerHTML = inp2.value;
    // output.innerHTML = '<strong>'+inp2.value+'<strong>';

}
btn.onclick = btnClick;
