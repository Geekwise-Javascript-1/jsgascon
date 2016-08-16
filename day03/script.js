// var str = 'Matthew';
// console.log(str.length);

// var str = 'Matthew';
// console.log(str.charAt(0));

/* String Object
var str = '             Matthew            Higley';
var newStr = str.trim();
console.log(newStr);
*/

/* Math Object */
// var randNum = Math.round( Math.random() * 10);
// console.log(randNum);

// var randNum = Math.round( Math.random() * 10) + 1;
// console.log(randNum);

// var randNum = Math.round( Math.random() * 10) - 1;
// console.log(randNum);

// var randNum = Math.round( Math.random() * 10) + 1;
// console.log(randNum);

/* Date Object */
// var toDay = Date;
// console.log(toDay.now());

// var toDay = new Date;
// console.log(toDay);

// var toDay = new Date;
// console.log(toDay.getDate());

// var toDay = new Date;
// console.log(toDay.getFullYear());

// var toDay = new Date;
// var d1 = toDay.getMonth();
// var d2 = toDay.getDate();
// var d3 = toDay.getFullYear();
// var d4 = d1 + d2 + d3;
// console.log(d4);

/*
locale = 'en-us';
var toDay = new Date;
console.log(toDay);
console.log(toDay.toLocaleString(locale,{month:"long"})+' '+toDay.getDate()+', '+toDay.getFullYear());
*/

/* Functions */
// var firstName = "Matthew";
//
// function newFunction(){
//   var lastName = "Higley";
//   alert(firstName);
//   alert(lastName);
// }
//
// newFunction();


/*
  Set strings outside of function
  Set date from inside the function
  alert your name and birthday

  easy: set birthday to value
  hard: set date with Date object
*/

// Easy
// var firstName = 'Joseph';
// var lastName = 'Gascon';
// function setBirthday(){
//   var birthday = 'September 26, 1990';
//   console.log(birthday);
// }
// setBirthday();
// alert(lastName);

//Hard
// var firstName = 'Joseph';
// var lastName = 'Gascon';
// var locale = 'en-us';
// function setBirthday(color){ // parameters
//   var toDay = new Date;
//   toDay.setFullYear(1990);
//   toDay.setDate(26);
//   toDay.setMonth(8);
//   var fullMon = toDay.toLocaleString(locale,{month:"long"});
//   console.log(firstName
//     + ' '
//     + lastName
//     + '. '
//     + fullMon
//     + ' '
//     + toDay.getDate()
//     + ', '
//     + toDay.getFullYear()
//     + '. And my color is '
//     + color);
//
// }
// setBirthday('green'); // arguments


// var userColor = prompt('choose a color');
//
// var firstName = 'Joseph';
// var lastName = 'Gascon';
// var locale = 'en-us';
// function setBirthday(color){ // parameters
//   var toDay = new Date;
//   toDay.setFullYear(1990);
//   toDay.setDate(26);
//   toDay.setMonth(8);
//   var fullMon = toDay.toLocaleString(locale, {month:"long"});
//   console.log(firstName
//     + ' '
//     + lastName
//     + '. '
//     + fullMon
//     + ' '
//     + toDay.getDate()
//     + ', '
//     + toDay.getFullYear()
//     + '. And my color is '
//     + color);
//
// }
// setBirthday(userColor); // arguments




/*
  prompt the user for their first and last name
  update your birthday function to have three parameters: color, first & last
  modify the console.log to output user first, last & color
  update function call to include all three arguments

  Extra:
  add date parameter: October 2, 1997
  String.split()
  name = ['matthew', 'david', 'higley'];
  name[1];
*/

// var userColor = prompt('choose a color');
// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?')
// var locale = 'en-us';
// function setBirthday(color){ // parameters
//   var toDay = new Date;
//   toDay.setFullYear(1990);
//   toDay.setDate(26);
//   toDay.setMonth(8);
//   // var fullMon = toDay.toLocaleString(locale, {month:"long"});
//   console.log(firstName
//     + ' '
//     + lastName
//     + '. And my color is '
//     + color
//     + '. '
//     + fullMon
//     + ' '
//     + toDay.getDate()
//     + ', '
//     + toDay.getFullYear());
//
// }
// setBirthday(userColor, firstName, lastName); // arguments

// Solution:
// var userFirst = prompt('first name')
// var userLast = prompt('last name');
// var userBday = prompt('birthday');
// var userColor = prompt('choose a color');
//
// function setBday(uF, uL, uB, uC){
//   console.log(
//     uF
//     + ' '
//     + uL
//     + ' '
//     + uB
//     + '. Your color is '
//     + uC
//   );
//
// }
// setBday(userFirst, userLast, userBday, userColor);

// Solution: Using an array
// var userFirst = prompt('first name')
// var userLast = prompt('last name');
// var userBday = prompt('birthday');
// var userColor = prompt('choose a color');
//
// function setBday(uF, uL, uB, uC){
//   //console.log(uB)
//   var bdayArr = uB.split(' ')
//   //console.log(bdayArr[0] + ' '+ bdayArr[1] + ', ' + bdayArr[2]);
//
//   console.log(
//     uF
//     + ' '
//     + uL
//     + ' '
//     + bdayArr[0] + ' ' + bdayArr[1] + ', ' + bdayArr[2]
//     + '. Your color is '
//     + uC
//   );
//
// }
// setBday(userFirst, userLast, userBday, userColor);

// Return Function
var userFirst = prompt('first name')
var userLast = prompt('last name');
var userBday = prompt('birthday');
var userColor = prompt('choose a color');

function setBday(uF, uL, uB, uC){
  //console.log(uB)
  var bdayArr = uB.split(' ')
  //console.log(bdayArr[0] + ' '+ bdayArr[1] + ', ' + bdayArr[2]);
  return uF + ' ' + uL + ' ' + bdayArr[0] + ' ' + bdayArr[1] + ', ' + bdayArr[2] + '. Your color is ' + uC;
}
console.log( setBday(userFirst, userLast, userBday, userColor) );
