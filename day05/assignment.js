// create js object for input1, input2, btn, div
// after user input values for input1 & input2
// user clicks go
// input1 value replaced with text "Hello Javascript!"
// alert new value of input1
// replace div text with value of input2

var btn = document.getElementById('btn');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var textbox = document.getElementById('textbox');

function btnClick(){
    // alert('user clicked on the button');
    alert('Hello Javascript!');
    getUserInput1();
    getUserInput2();
}
btn.onclick = btnClick;

function getUserInput1(input1){
  input1 = ''
}
function getUserInput2(input2){

}
