// var fruits = ['apple', 'banana', 'cherry', 'strawberry'];
// console.log(fruits.length);


// var fruits = ['apple', 'banana', 'cherry', 'strawberry'];
// fruits.push('kiwi');
// console.log(fruits);


// var fruitColors = [];
// var cherry = ['cherry', 'red'];
// var banana = ['banana', 'yellow'];
// var kiwi = ['kiwi', 'green'];
// fruitColors.push(cherry);
// fruitColors.push(banana);
// fruitColors.push(kiwi);
// console.log(fruitColors);


// var fruitColors = [];
// var cherry = ['cherry', 'red'];
// var banana = ['banana', 'yellow'];
// var kiwi = ['kiwi', 'green'];
// console.log(fruitColors);
// console.log( fruitColors[0][1]);
// console.log( fruitColors[1][1]);
// console.log( fruitColors[2][1]);


// var fruitColors = [];
// var cherry = ['cherry', 'red'];
// var banana = ['banana', 'yellow'];
// var kiwi = ['kiwi', 'green'];
// fruitColors.push(cherry);
// fruitColors.push(banana);
// fruitColors.push(kiwi);
// var lastFruit = fruitColors.pop(); // remove el from end of array
// var firstFruit = fruitColors.shift(); // remove el from front of array
// console.log(lastFruit);
// console.log(fruitColors);


// var fruits = ['apple', 'banana', 'cherry', 'strawberry','pineapple'];
// var fruitColors = [];
// var cherry = ['cherry', 'red'];
// var banana = ['banana', 'yellow'];
// var kiwi = ['kiwi', 'green'];
// fruitColors.push(cherry);
// fruitColors.push(banana);
// fruitColors.push(kiwi);
// var lastFruit = fruitColors.pop(); // remove el from end of array
// var firstFruit = fruitColors.shift(); // remove el from front of array
// var selectedFruit = fruits.slice(2, 4); // creates new array with selected indexies
// console.log(fruits);
// console.log(selectedFruit);


// var fruits = ['apple', 'banana', 'cherry', 'strawberry','pineapple'];
// var fruitColors = [];
// var cherry = ['cherry', 'red'];
// var banana = ['banana', 'yellow'];
// var kiwi = ['kiwi', 'green'];
// fruitColors.push(cherry);
// fruitColors.push(banana);
// fruitColors.push(kiwi);
// fruits.splice(3, 0, 'grape');
// console.log(fruits);


// var fruits = ['apple', 'banana', 'cherry', 'strawberry','pineapple'];
// var fruitColors = [];
// var cherry = ['cherry', 'red'];
// var banana = ['banana', 'yellow'];
// var kiwi = ['kiwi', 'green'];
// fruitColors.push(cherry);
// fruitColors.push(banana);
// fruitColors.push(kiwi);
// fruits.splice(3, 1);
// console.log(fruits);


// var fruits = ['apple', 'banana', 'cherry', 'strawberry','pineapple'];
// var fruitColors = [];
// var cherry = ['cherry', 'red'];
// var banana = ['banana', 'yellow'];
// var kiwi = ['kiwi', 'green'];
// fruitColors.push(cherry);
// fruitColors.push(banana);
// fruitColors.push(kiwi);
// fruits.splice(1, 2, 'grape');
// console.log(fruits);

// var fruits = [];
// function getFruit(){
//   var fruit = prompt('enter a fruit');
//   fruits.push(fruit);
//   moreFruit();
// }
// function moreFruit(){
//   var addMore = confirm('add more?');
//   if( addMore ){
//     getFruit();
//   }else{
//     console.log(fruits);
//   }
// }
// getFruit();


// add function asking for an index number
// remove that index from the fruits array
// console array
// var fruits = [];
// function getFruit(){
//   var fruit = prompt('enter a fruit');
//   fruits.push(fruit);
//   moreFruit();
// }
// function moreFruit(){
//   var addMore = confirm('add more?');
//   if( addMore ){
//     getFruit();
//   }else{
//     console.log(fruits);
//     removeFruit();
//   }
// }
// function removeFruit(){
//   var remove = prompt('enter an index number');
//   fruits.splice(remove, 1);
//   fruits.sort();
//   outputFruits(fruits);
// }
// getFruit();
//
// function outputFruits(array){
//
//   // FOR LOOP
//   // for(var i = 0, len = array.length; i < len; i++){
//   //   console.log(array[i]);
//   // }
//
//   // same as above, written above as in stack overflow
//   // for(var i = 0; i < array.length; i++){
//   //
//   // }
//
//   // WHILE LOOP
//   // var i = 0;
//   // while(i < array.length){
//   //   console.log(array[i]);
//   //   i++;
//   // }
//
//   // DO / WHILE LOOP
//   // var i = 0;
//   // do{
//   //   console.log(array[i]);
//   //   i++;
//   // }while( false);
//
//   // var i = 0;
//   // do{
//   //   console.log(array[i]);
//   //   i++;
//   // }while( i < array.length);
// }


// loop through numbers 1 - 10
// if number is 5 or 7 skip number => 'continue'
// console number
// // FOR LOOP
// for(var i = 1; i <= 10; i++){
//   if(i === 5 || i === 7){
//     continue;
//   }
//   console.log(i);
// }
//
// //WHILE LOOP
// var i = 0;
// while(i <= 10){
//   if(i === 5 || i === 7){
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }


// loop through numbers 1 - 10
// console current number
// if number is 6
// stop loop => 'break'
// for(var i = 1; i <= 10; i++){
//   if(i === 6){
//     break;
//   }
//   console.log(i);
// }
