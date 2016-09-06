// var loginEl = document.getElementById('login');
// loginEl.textContent = "hello";

// function setStorage(){
//   // sessionStorage.setItem('color','red');
//   localStorage.setItem('color','red');
// }

// function setStorage(e){
//   e.preventDefault();
//   // console.log(form.elements.pass.value);
//   localStorage.setItem('username', form.elements.user.value);
//   localStorage.setItem('password', MD5(form.elements.pass.value));
//   // storageArr = [];
//   // for(var i = 0; i < form.elements.length; i++) {
//   //   storageArr.push(form.elements[i].value);
//   // }
//   // localStorage.setItem('creds','storageArr');
// }

// if(!localStorage.getItem('username') && !localStorage.getItem('password')){
//   // console.log('theyre set');
//   alert('Please enter a username and password to proceed');
//   submitBtn.addEventListener('click', setStorage);
// }else if(localStorage.getItem('username') && localStorage.getItem('password')){
//   alert('Welcome back '+localStorage.getItem('username')+'. Please enter your password to continue');
//   submitBtn.addEventListener('click', setStorage);
// }



// var loginEl = document.getElementById('login');
//
// funcction createLoginForm(repeat){
//   var user = '';
//   if(repeat){
//     user = localStorage.getItem('username');
//   }
//
//   var loginForm =
//   '<form>'+
//     '<label for="user">Username:'+
//       '<input type="text" id="user" value="'+ user +'">'+
//     '</label>'+
//     '<label for="pass">Password:'+
//       '<input type="password" id="pass">'+
//     '</label>'+
//     '<input type="submit" value="submit">'+
//   '</form>';
//   loginEl.innerHTML = loginForm;
//
//   // var loginForm = querySelector('form'),
//   //     submitBtn = document.querySelector('input[type="submit"]');
//
//   return;
// }
//
// function setStorage(e){
//   e.preventDefault();
//   localStorage.setItem('username', form.elements.user.value);
//   localStorage.setItem('password', MD5(form.elements.pass.value));
// }
//
// function checkStorage(e){
//   e.preventDefault();
//
//   if(MD5(form.elements.pass.value) === localStorage.getItem('password')){
//     alert('Access Granted');
//   }else{
//     alert('Please check your password');
//   }
// }
//
// if(!localStorage.getItem('username') && !localStorage.getItem('password')){
//   createLoginForm(false);
//   alert('Please enter a username and password to proceed');
//
//   var loginForm = querySelector('form'),
//       submitBtn = document.querySelector('input[type="submit"]');
//   submitBtn.addEventListener('click', setStorage);
//
//   sessionStorage.setItem('repeat', true);
//
// }else if(localStorage.getItem('username') && localStorage.getItem('password')){
//   alert('Welcome back '+localStorage.getItem('username')+'. Please enter your password to continue');
//
//   var loginForm = querySelector('form'),
//       submitBtn = document.querySelector('input[type="submit"]');
//   submitBtn.addEventListener('click', setStorage);
//
// }




var loginEl = document.getElementById('login');

function createLoginForm(repeat){
    var user = '';
    if(repeat){
        user = localStorage.getItem('username');
    }

    var loginForm =
    '<form>'+
    '<label for="user">Username:'+
    '<input type="text" id="user" value="'+ user +'">'+
    '</label>'+
    '<label for="pass">Password:'+
    '<input type="password" id="pass">'+
    '</label>'+
    '<input type="submit" value="submit">'+
    '</form>';
    loginEl.innerHTML = loginForm;

    return;
}

function setStorage(e){
    e.preventDefault();

    localStorage.setItem('username', form.elements.user.value);
    localStorage.setItem('password', MD5(form.elements.pass.value));
}

function checkStorage(e){
    e.preventDefault();

    if(MD5(form.elements.pass.value) === localStorage.getItem('password')){
        alert('Access Granted');
    }else{
        alert('Please check your password');
    }
}

if(!localStorage.getItem('username') && !localStorage.getItem('password')){
    createLoginForm(false);
    alert('Please enter a username and password to proceed');

    var form = document.querySelector('form'),
        submitBtn = document.querySelector('input[type="submit"]');

    submitBtn.addEventListener('click', setStorage);
    //sessionStorage.setItem('repeat', true);
}else if(localStorage.getItem('username') && localStorage.getItem('password')){
    createLoginForm(true);
    alert('Welcome back '+localStorage.getItem('username')+'. Please enter your password to continue');

    var form = document.querySelector('form'),
        submitBtn = document.querySelector('input[type="submit"]');
    submitBtn.addEventListener('click', checkStorage);
}
