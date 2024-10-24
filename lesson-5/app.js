// Array methods

// let fruits = [
//   "Apple",
//   "Lime",
//   "Banana",
//   "Cherry",
//   "Strawberry",
//   "Apple",
//   "Water melon",
// ];

// // console.log(fruits.length);
// let all = fruits.concat(
//   ["Pear", "Lime"],
//   ["Strawberry", "Water melon", ["Pineapple"]]
// );
let arr = [["Pear", "Water melon", ["cherry", ["apple"]]], ["Pineapple"]];
// console.log(arr.flat(6));
// console.log(fruits.includes("Apple"));
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.lastIndexOf("Apple"));
// console.log(fruits.lastIndexOf("Apple"));
// let str = "test";
// let arr = str.split("");
// console.log(arr);
// console.log(arr.join(" -> "));
// console.log(fruits.reverse());
// console.log("fruits".split("").reverse().join(""));
// console.log(arr.flat(3).slice(1, 3));
// console.log(fruits);
// console.log(fruits.sort());

// let numbers = [2, 1,"A", 33,"a", 5, 11, 8];

// console.log(numbers.sort());

// let str = "11";
// console.log(str.charCodeAt(0));

// console.log(fruits.sort().reverse());

// let fruits = ["Apple", "Lime", "Banana", "Cherry"];

// fruits[fruits.length] = "Apple";
// fruits[fruits.length] = "rrrrr";

// console.log(fruits);

// push pop shift unshift

// push oxiridan elemnt qoshadi
// fruits.push("Apple","Lime");
// console.log(fruits);

// pop  oxiridan bitta ochiradi
// fruits.pop();
// fruits.pop();
// fruits.pop();
// console.log(fruits);

// shift  boshidan bittani ochiradi
// fruits.shift();
// fruits.shift();
// console.log(fruits);

// unshift  boshidan elmnt qoshadi
// fruits.unshift("LIme","test");
// console.log(fruits);

// splice
// let fruits = ["Apple", "Lime", "Banana", "Cherry"];
// // fruits.splice(2, 2);
// // console.log(fruits);
// fruits.splice(1, 0, "test","testeeee");
// console.log(fruits);

// Date

// let date = new Date();
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMilliseconds());
// console.log(date.getMonth());
// console.log(date.getUTCDate());
// console.log(date.getTimezoneOffset());

// getDate
// getFullYear
// getDay
// getHours
// getMinutes
// getSeconds
// getMilliseconds
// getMonth
// getTime
// getTimezoneOffset
// getUTCHours
// getUTCFullYear

// 1) Ism va tugilgan kun sorab
// Hurmatli {Ism}, siz {yil}yil {oy}oy {kun}kun {soat}soat yashabsiz
// Namuna:
// 10 yil, 8oy, 22kun ✅
// 10 yil, 128oy, 3862kun ❌

// 2) console ga mevalar
// meva oxiriga qoshish
// console ga mevalar
// mevalar boshidan bittasin ochirish
// console ga mevalar

// // task 1
// Ikkita massiv yarating: biri 5 ta raqamdan, ikkinchisi esa 3 ta
//  raqamdan iborat. Ularni yangi massivga
//  birlashtiring va yangi massiv uzunligini jurnalga yozing.

// task 2
// [[1, 2], [3, 4], [5, 6]]

// task 3
// [10, 20, 30, 40, 50]
// user son kiritadi ushbu son arrayda bor yoki yoqligini topib bersin

// task 4
// ['apple', 'banana', 'orange']
// ushbu array elemntlarini "=>"  belgisi bilan birlashtring

// // let birthdate = new Date("2023-10-26T06:00:00");
// 1) Ism va tugilgan kun sorab
// Hurmatli {Ism}, siz {yil}yil {oy}oy {kun}kun {soat}soat yashabsiz

let age = 43;
`sizning yishingiz ${age}`;
