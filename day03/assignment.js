/*
.charAt()
.toUpperCase()
.substr()
*/

// var name = prompt('What is your name?');
// name = name.charAt(0).toUpperCase() + name.slice(1);
// console.log(name);

// var name = prompt('What is your name?');
// name = name.charAt(0).toUpperCase() + name.substr(1);
// console.log(name);

var name = prompt('What is your name?');
if(name.charAt(0) == name.charAt(0).toLowerCase() && name.charAt(0) != name.charAt(0).toUpperCase()){
  name = name.charAt(0).toUpperCase() + name.substr(1);
  console.log(name);
  alert('First letter is lower case.')
}else{
  alert('First letter is already upper case.');
  console.log(name);
}
