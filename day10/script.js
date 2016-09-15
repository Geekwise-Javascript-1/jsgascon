// var Car = {
//   make: 'jeep',
//   model: 'wrangler',
//   year: 97
// };
// console.log(Car.make);
// Car.model = 'rubicon';
//
// console.log(Car.model);




// var person = new Object();
// person.name = "matthew";
// person.age = 26;
// person.job = "developer";
// person.sayName = function(){
//   alert(this.name);
// };
// person.sayName();




// var person2 = {
//   name: "david",
//   age: 26,
//   job: "developer",
//   sayName: function(){
//     alert(this.name);
//   }
// };
// person2.sayName();




// Factory Pattern
// function createPerson(name, age, job){
//   var p = new Object();
//   p.name = name;
//   p.age = age;
//   p.job = job;
//   p.sayName = function(){
//     alert(this.name);
//   };
//   return p;
// }
// var person1 = createPerson("matt", 26, "developer");
// var person2 = createPerson("ryan", 22, "developer and an awesome guy");
//
// person1.sayName();
// person2.sayName();




// function Person(name, age, job){
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function(){
//     alert(this.name);
//   }
// }
// var person1 = new Person('matt', 26, 'developer');
// var person2 = new Person('ryan', 22, 'developer');
//
// console.log(person1.age);
// person2.sayName();




// function Person(name, age, job){
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function(){
//     alert(this.name);
//   };
// }
//
// function Login(user){
//   this.user = user;
//   this.build = function(){
//     var login = document.getElementById('login');
//     var h2 = document.createElement('h2'),
//         form = document.createElement('form'),
//         label = document.createElement('label'),
//         input = document.createElement('input'),
//         submit = document.createElement('input');
//
//     h2.textContent = ' Welcome ' + this.user +' to your login page';
//     label.setAttribute('for', 'user');
//     label.textContent = 'Username: ';
//     input.type = 'text';
//     input.id = 'user';
//     input.placeholder = 'username';
//     submit.type = 'submit';
//     submit.value = 'submit';
//
//     login.appendChild(h2);
//     label.appendChild(input);
//     form.appendChild(label);
//     form.appendChild(submit);
//     form.appendChild(form);
//   };
// }
//
// var login1 = new Login('matt');
// var login2 = new Login('ryan');
//
// login1.build();
// login2.build();




// function Person(name, age, job){
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function(){
//     alert(this.name);
//   };
// }


var loginNum = 0;
function Login(user){
  this.user = user;
  this.build = build;
}
function build(){
  loginNum++;
  this.build = function(){
    var login = document.getElementById('login');
    var h2 = document.createElement('h2'),
        form = document.createElement('form'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        submit = document.createElement('input');

    h2.textContent = ' Welcome ' + this.user +' to your login page';
    label.setAttribute('for', 'user'+loginNum);
    label.textContent = 'Username: ';
    input.type = 'text';
    input.id = 'user'+loginNum;
    input.placeholder = 'username';
    submit.type = 'submit';
    submit.value = 'submit';

    login.appendChild(h2);
    label.appendChild(input);
    form.appendChild(label);
    form.appendChild(submit);
    login.appendChild(form);
  }
}

var login1 = new Login('matt');
var login2 = new Login('ryan');

login1.build();
login2.build();
