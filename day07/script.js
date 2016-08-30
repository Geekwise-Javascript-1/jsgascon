// var btn = document.querySelector('button');
//
// btn.addEventListener('click', function(e){
//   console.log(e);
//   console.log(this);
//   console.log('clicked!');
// });
//
// function once(){
//
// }


// Add and remove event listener
// var btn = document.querySelector('button');
//
// btn.addEventListener('click', once);
//
// function once(){
//   console.log('done!');
//   btn.removeEventListener('click', once);
// }


// detect mouse button clicks
// var btn = document.querySelector('button');
//
// btn.addEventListener('mousedown', function(e){
//   console.log(e);
//   if(e.which == 1){
//     console.log('left click');
//   }else if(e.which == 2){
//     console.log('middle click');
//   }else if(e.which == 3){
//     console.log('right click');
//   }
//
// });


// preventing default behavior
// var btn = document.querySelector('button');
// var a = document.querySelector('a');
//
// a.addEventListener('click', function(e){
//   console.log(e);
//   e.preventDefault();
//   console.log('google block!');
// });


// var btn = document.querySelector('button');
// var a = document.querySelector('a');
//
// addEventListener('keydown', function(e){
//   console.log(e);
//   if(e.keyCode == 86){
//     document.body.style.backgroundColor = 'violet';
//   }
// });
//
// addEventListener('keyup', function(e){
//   if(e.keyCode == 86){
//     document.body.style.backgroundColor = '';
//   }
// });


// var btn = document.querySelector('button');
// var a = document.querySelector('a');
//
// addEventListener('keypress', function(e){
//   console.log(e);
//   if(e.keyCode == 118){
//     document.body.style.backgroundColor = 'violet';
//   }
// });


// console.log("P".charCodeAt(0));


// Listen for mouse move
// addEventListener('mousemove', function(e){
//   // console.log(e.screenX+'px');
//   // console.log(e.screenY+'px');
// });


// render dot based on click location
// addEventListener('click', function(e){
//   var dot = document.createElement('div');
//   dot.className = 'dot';
//   dot.style.left = (e.pageX - 3) + 'px';
//   dot.style.top = (e.pageY - 3) + 'px';
//   document.body.appendChild(dot);
// });


var hdr = document.querySelector('header');

addEventListener('scroll', function(e){
  console.log(e);
  if(e.pageY >= 65){
    hdr.classList.add('fixed');
    document.body.style.paddingTop = '65px';
  }else{
    hdr.classList.remove('fixed');
    document.body.style.paddingTop = '0px';
  }
});
