/*
.charAt()
.toUpperCase()
.substr()
*/

var name = prompt('What is your name?');
name = name.charAt(0).toUpperCase() + name.slice(1);;
console.log(name);
