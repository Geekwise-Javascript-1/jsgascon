// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');
// console.log(firstName);
// alert(lastName);
// var answer = confirm('Is this information correct?');
// alert(answer);

// var a = 'test' + '' + 'string';
// var a = 'test ' + 'string';
// var b = 5;
// var c = 10;
// var d = b % c;
// console.log(d);
// Math Operations + - / * %

// Order of Operations
// var d = 10 / (2 +3);
// console.log(d);

// var a = 'test ' + 'string';
// var b = 5;
// var c = 6;
// var d = 10;
// d++;
// console.log(d);

// var a = 'test ' + 'string';
// var b = 5;
// var c = 5;
// var d = 10;
// var e = b == c;
// console.log(e);

// Strict Operator
// var a = 'test ' + 'string';
// var b = 5;
// var c = '5';
// var d = 10;
// var e = b === c;
// console.log(e);

// var constant = 10;
// var userResp = prompt('Choose a number');
// console.log(constant == userResp);

// var constant = 10;
// var x = 10;
// var userResp = prompt('Choose a number');
// console.log(constant === userResp || x === userResp);

// var constant = 10;
// var x = 10;
// var userResp = prompt('Choose a number');
// console.log(constant === userResp && x === userResp);

// var constant = 10;
// var userResp = prompt('Choose a number');
// userResp = parseInt(userResp);
// console.log(constant === userResp);

// var constant = 10;
// var userResp = prompt('Choose a number');
// userResp = parseInt(userResp);
// console.log( isNaN(5) );
// console.log( isNaN('hello') );
// console.log( isNaN(true) );
// console.log( isNaN(undefined) );
// console.log( isNaN(NaN) );

// var userResp = prompt('Choose a number');
// userResp = parseInt(userResp);
// console.log(userResp);
// if( !isNaN(userResp)) {
//   //console.log('not a number');
//   alert('was that a number?');
// }

// var userResp = prompt('Choose a number');
// userResp = parseInt(userResp);
// console.log(userResp);
//
// if( !isNaN(userResp)) {
//   //console.log('not a number');
//   alert('was that a number?');
// }else {
//   alert('your number is '+userResp);
// }

// var userResp = prompt('Choose a number');
// userResp = parseInt(userResp);
// console.log(userResp);
//
// if( userResp == 10 ) {
//   //console.log('not a number');
//   alert('that was a 10');
// }else if( userResp < 10 ) {
//   alert('your number is less than 10');
// }else{
//   alert('its none of the above');
// }

// Ask if the user is 21 and compare
// Alert the confirmation
// If under 21, Alert underage
// var ofAge = prompt('What is your age?')
// console.log(ofAge);
//
// if (ofAge >= 21){
//   alert('drink up');
// }else{
//   alert('no no no');
// }

// message to 21+ male
// message to 21+ female
// message to all under 21
// var ofAge = prompt('What is your age?');
// var gender = prompt('What is your gender?');
// if (ofAge >= 21 && gender == 'male'){
//   alert('net yet mature');
// }else if(ofAge >= 21 && gender == 'female'){
//   alert('mature at 5');
// }else{
//   alert('underage');
// }

// var ofAge = prompt('What is your age?');
// var gender = prompt('What is your gender?');
// if (ofAge < 21){
//   lert('underage');
// }else if(gender == 'female'){
//   alert('mature at 5');
// }else if(gender == 'male'){
//   alert('not yet mature');
// }

// Ternary Operator
// var ofAge = prompt('What is your age?');
// (ofAge < 21) ? alert('under 21') : alert('over 21');

// var ofAge = prompt('What is your age?');
// if(ofAge < 21){
//   if(gender == 'female'){
//
//   }else{
//
//   }
// }

// git status // what changes have been made

// git add . // will add all changes to be tracked
// git commit -m 'you message' // commits changes to be pushed
// git push // pushes changes to repo


// Week day 3 assignment
// var userResp = prompt('What would you like to do?');
// if(userResp == isNaN('') || userResp == isNaN(undefined)){
//   alert('You did not put a response.')
// }else{
//   alert(userResp);
//   console.log(userResp);
// }


// var userResp = prompt('What do you want to do?');
// console.log(userResp);

// ""
// null

/*
var userResp = prompt('What do you want to do?');
console.log(userResp);
if(userResp > ' '){
  alert(userResp);
}else{
  alert('please enter a value');
}
*/
/*
var userResp = prompt('What do you want to do?');
console.log(userResp);

if(userResp == null || userResp == ''){
  alert('enter something');
}else{
  alert(userResp);
}
*/


var userResp = prompt('What do you want to do?');
console.log(userResp);

if(userResp == null || userResp >= ''){
  alert('enter something');
}else{
  alert(userResp);
}
