// Functions
/*
function hello(){
  var msg = "hello";
  world(msg);
}

function world(message){
  alert(message+" world");
}
hello();
*/

// function getUsername(){
//   var user = prompt('what is your username?');
//   craftMsg(user);
// }
// /*
//   create new craftMsg function
//   alert out value of user
// */
// function craftMsg(u){
//   alert(u);
// }
// getUsername();

// function getUsername(){
//   var user = prompt('what is your username?');
//   craftMsg(user);
// }
// function craftMsg(u){
//   var msg = 'Welcome ';
//   msg += u;
//   msg +=' to my site';
//   alert(msg);
// }
// getUsername();

// function getUsername(){
//   var user = prompt('what is your username?');
//   craftMsg(user);
// }
// function craftMsg(u){
//   var msg = 'Welcome ';
//   msg += formatUsername(u);
//   msg +=' to my site';
//   alertUser(msg);
// }
// function alertUser(m){
//   alert(m);
// }
// function formatUsername(n){
//   return n.charAt(0).toUpperCase() + n.substr(1, n.length);
// }
// getUsername();

// function getUsername(){
//   var user = prompt('what is your username?');
//   craftMsg(user);
// }
// function craftMsg(u){
//   var msg = 'Welcome ';
//   msg += formatUsername(u);
//   msg +=' to my site';
//   alertUser(msg);
// }
// function formatUsername(first){
//   return first.charAt(0).toUpperCase() + first.toLowerCase().substr(1, first.length);
// }
// function alertUser(m){
//   alert(m);
// }
//
// getUsername();

// function getUsername(){
//   var user = prompt('what is your username?');
//   craftMsg(user);
// }
// function craftMsg(u){
//   var msg = 'Welcome ';
//   msg += formatUsername(u);
//   msg +=' to my site';
//   alertUser(msg);
// }
// function formatUsername(first){
//   return first.charAt(0).toUpperCase() + first.toLowerCase().substr(1, first.length);
// }
// function alertUser(m){
//   alert(m);
// }
// // getUsername();
//
// function checkUsername(){
//   var user = prompt('what is your name');
//   user = parseInt(user);
//   // console.log(typeof user);
//   //console.log( isNaN(user) );
//   if( !isNaN(user) ){
//     alert('thats not a proper username');
//     return;
//   }
//   alert('thank you '+ user);
//
//
// }
// checkUsername();

// incoporate checkUsername function into getUsername script
// call checkUsername passing in users input
// modify current checkUsername removing prompt
// return username IF input is not a number

// function getUsername(){
//   var user = prompt('what is your username?');
//   user = checkUsername(user);
//   craftMsg(user);
// }
// function craftMsg(u){
//   var msg = 'Welcome ';
//   msg += formatUsername(u);
//   msg +=' to my site';
//   alertUser(msg);
// }
// function formatUsername(first){
//   return first.charAt(0).toUpperCase() + first.toLowerCase().substr(1, first.length);
// }
// function alertUser(m){
//   alert(m);
// }
//
// getUsername();
//
// function checkUsername(user){
//   var preparsed = user;
//   user = parseInt(user);
//   //console.log( isNaN(user) );
//   if( !isNaN(user) ){
//     alert('thats not a proper username');
//     return;
//   }
//   return preparsed;
// }

// Part 2 implement trimming of spaces of username

function getUsername(){
  var user = prompt('what is your username?');
  user = checkUsername(user);

}
function craftMsg(u){
  var msg = 'Welcome ';
  msg += formatUsername(u);
  msg +=' to my site';
  alertUser(msg);
}
function formatUsername(first){
  return first.charAt(0).toUpperCase() + first.toLowerCase().substr(1, first.length);
}
function alertUser(m){
  alert(m);
}

getUsername();

function checkUsername(user){
  var preparsed = user;
  user = parseInt(user);

  // console.log(user);
  // console.log(preparsed);

  // add cgecj fir preparsed blank
  // add check for preparsed null
  if( !isNaN(user) || preparsed === null || preparsed === '' || preparsed.trim() === ''){
    alert('thats not a proper username');
    return;
  }
  preparsed = preparsed.trim();
  craftMsg(preparsed);
}
