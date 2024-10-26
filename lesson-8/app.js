// Advanced functions
// factrory function   object yasash uchun kk boladi
// IIFE function darhol ishlab ketaidigan function
// callbacks function parameterda keladigan function
// HOF (High order function) => parametrida function kelgan yoki
// function retirn qilgan function HOF function deyiladi
// anonymous function

// object method  => property sifatida yozilgan function
// this keyword => object ichida aynan osha objectga teng boladi
// ?. optional chaining
// in keyword

// factrory function
// function makeObject(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let user1 = makeObject("John", 30);
// let user2 = makeObject("John", 30);
// console.log(user1 === user1);
// console.log({} == {});

// let ism = prompt("Enter name");
// let user = {
//   name:ism ,
//   age: 30,
// };

// IIFE function (Immediately invoced function expression)

// (function test() {
//   alert("oyin boshlandi");
//   // ............
//   alert("oyin tugadi");
//   let user = confirm("yana oynashni hohlaysammi");
//   if (user) {
//     test();
//   } else {
//     alert("oyin ochirildi");
//   }
// })();

// (function(){

// })()

// let arr = [1,2,3,4,5,6,7,8,9];
// arr.map((val,inx)=>{
//     console.log(val, inx);
// })

//  Hof High order function

// function test(a) {
//   a();
// }
// test(() => {
//   console.log("HOF");
// });

// function test() {
//   return function () {
//     console.log("anonymous function");
//   };
// }

// let bir = test();
// bir();

// Object Methods
// let user = {
//   name: "John",
//   age: 30,
//   sayHello: () => {
//     console.log(`Hello, my name is ${this.name} `);
//     console.log(this);
//   },
//   sayBye() {
//     console.log(`Bye, i am  ${this.age} years old`);
//   },
// };

// user.sayHello();
// user.sayBye();
// console.log(window);

// ?. optional chaining

// let user = {
//   name: "John",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     country: "USA",
//   },
// };
// console.log(user.address.city?.code?.zip);

// let test;
// console.log(test.age);

// let user = {
//   name: "John",
//   age: 30,
//   sayHello() {
//     console.log(`Hello, my name is ${this.name} `);
//     console.log(this);
//   },
//   sayBye() {
//     console.log(`Bye, i am  ${this.age} years old`);
//   },
// };
// console.log("names" in user);




// person objectini tuzing uning ichida name surname address  va uning
// ichida city va zipcode bolsin
//  objectga uning toliq ismini katta harflar bilan chiqarib beradigan method yarating
// ?. dan foydalanib mavjud qiymatlarini tekshirib koring 
