let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// data.forEach((val, inx) => {
//   console.log(`Index: ${inx}, Value: ${val}`);
//   if (val % 3 === 0) {
//     console.log("Value is divisible by 3");
//   }
// });
// let res = data.map((val, inx) => {
//   return val % 2 == 0 ? val + "=" : val;
//   if (val % 2 === 0) {
//     return val *2;
//   } else{
//     return val;
//   }
//   return val % 2 === 0 && val + "=";  // !!!
// });
// console.log(res);
// console.log(res);

// /////////////////////  rest operator(...),spread operator(...),
/////////////////////// ternery operator ? :
/////////////////////// pure inpure function

// rest operator(...) yigib beradi
// function test(a=0,b,...rest) {
//     console.log(rest);
// //   console.log(a, b, c, d, e, f);
// }
// test(1, 2, 3, 4, 5, "test");

// let arr = [1, 42, 33, 4, 5]; // ...arr = 1, 42, 33, 4, 5
// console.log(Math.max(...arr));
// console.log(...arr);
// console.log([...arr, 34, 8].filter((val) => val % 2 === 0));;

// let user = {
//   name: "John Doe",
//   age: 30,
//   email: "JohnDoe@dddd",
//   street: "123 Main St",
//   city: "New York",
//   state: "NY",
//   name: "jack",
//   hobbies: [1, 2, 3],
// };
// user.number = 423;
// console.log({
//   ...user,
//   name: "Jack",
//   age: 88,
//   hobbies: [...user.hobbies],
// });

// user.hobbies[1] = 444;
// console.log(user);

//  ternary operator shart ? amal1 : shart ? amal2 :amal3 (same as if else)
// let operator = 15;
// let res =
//   operator % 2 === 0
//     ? operator * 2
//     : operator === 3
//     ? operator + 5
//     : operator > 12
//     ? operator + 88
//     : operator - 99;
// console.log(res);
// if (operator % 2 === 0) {
//   console.log(operator * 2);
// } else {
//   console.log(operator / 2);
// }

// 50  dan katta bolsa juda issiq
// agar 35 va 50 oraligida bolsa issiq
// agar 20 va 35 da bolsa iliq
//  10 20 bolsa salqin
// 10dan past bolsa sovuq
// 0dan past muzlisan chiqma

///////////////////// pure inpure function
// function test2(a, b) {
//   return a + b;
// }

// console.log(test2(5, 10));
// console.log(test2(25, 10));
// console.log(test2(5, 40));
// console.log(test2(5, 70));
// let count = 0;
// function test() {
//   count++;
//   return count;
// }
// test();
// test();
// console.log(test());

//  closure functions ozidan tashqaridagi ozgaruvchilarni ishlata oladigan function
// let test = "sdfs";
// function outerFunc() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// outerFunc();
// let rest = outerFunc();
// rest()
// rest()
// // console.log(rest);


// homework
let datas = [
    {id:1, name: "John", age: 25, gender: "male" },
    {id:2, name: "Alice", age: 30, gender: "female" },
    {id:3, name: "Bob", age: 28, gender: "male" },
    {id:4, name: "Charlie", age: 32, gender: "female" },
    {id:5, name: "David", age: 27, gender: "male" },
    {id:6, name: "Emily", age: 35, gender: "female" },
    {id:7, name: "Frank", age: 29, gender: "male" },
    {id:8, name: "Grace", age: 33, gender: "female" },
    {id:9, name: "Harry", age: 31, gender: "male" },
    {id:10, name: "Isabella", age: 34, gender: "female" },
]

// CRUD
// c=CREATE
// R=>READ
// U => UPDATE
// D => DELETE

// create({id:smth, name: "thhhh", age: 31, gender: "male" })
// read("Harry") =>{id:9, name: "Harry", age: 31, gender: "male" },
// update(2,{name:"rrrrr", age: 55})
// ondelete(3)