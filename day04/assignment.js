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
  if( !isNaN(user) || preparsed === null || preparsed === '' || preparsed.trim() === ''){
    alert('thats not a proper username');
    return;
  }
  preparsed = preparsed.trim();
  craftMsg(preparsed);
}
