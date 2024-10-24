// if
// else if
// else

// let a = 12;
// if (a % 3 == 0) {
//   console.log("uchga bolinadi");
// } else {
//   console.log("uchga bolinmas");
// }

// if (3 > 1) {
//   console.log("3-dan kichik");
// } else if (3 == 0) {
//   console.log("3-dan katta");
// } else {
//   console.log("3-dan kichik emas");
// }

// let user = {
//     name: "John Doe",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       country: "USA"
//     }
// }
// delete user.age
// console.log(user["name"]);
// let a = 53;
// if (!(a % 3)) {
//   console.log("uchga bolinadi");
// } else if (!(a % 5)) {
//   console.log("beshga  bolinadi");
// } else if (!(a % 7)) {
//   console.log("sadece 7-ga bolinadi");
// } else {
//   console.log("boshqa chislo bolinadi");
// }

// let yomgir = true;
// let dars = false;
// if (yomgir && dars) {
//   console.log("darsga bormimiz");
// } else if (dars && !yomgir) {
//   console.log("yomgirga boramiz");
// } else if (!dars && yomgir) {
//   console.log("darsga emas, yomgirga boramiz");
// }else{
//     console.log("darsga emas, yomgirga emas");
// }

// switch case

// let a = "test";
// switch (a) {
//   case "text":
//     console.log("bir");
//     break;
//   case "test":
//     console.log("ikki");
//     break;
//   case 3:
//     console.log("uc");
//     break;
//   case 4:
//     console.log("tort");
//     break;
//   case 5:
//     console.log("besh");
//     break;
//   default:
//     console.log("boshqa chislo");
// }

// Object creation
// let user = { ism: "username", age: 23 };
// let nimakere = prompt("kerakli qiymatni kiriting");
// nimakere = "age"
// read . , []
// console.log(user.ism);
// console.log(user[nimakere]);

// create
// user.address = "Tashkent";
// user["number"] = "+99899998898";

// // delete
// delete user["address"];

// // update
// user.ism = "Azizbek";
// console.log(user);

// // => CRUD

// /////////////////// array
let fruits = ["apple", "orange", "banana"];
// read
// console.log(fruits[3]);

// // create
// fruits[3] = "grapes";
// console.log(fruits);

// // update
// fruits[1] = "Kiwi";
// console.log(fruits);

// // delete
// delete fruits[0];
// console.log(fruits);

// ///////////////////////////////

// String methods
// let str = "   Lorem IPSUM Dolor Sit j ipsum amet. +998989832 amet.     ";
// let cardnum = "test";
// console.log(str.length);
// console.log(str.charAt(3));
// console.log(str.charCodeAt(2));
// console.log(str.concat("Eshmat", str2,"dddd"));
// console.log(str.endsWith("amet."));
// console.log(str.includes("j"));
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));
// console.log(cardnum.padEnd(16, "*"));
// console.log(cardnum.padStart(16, "*"));
// console.log(cardnum.repeat(13));
// console.log(str.replace(" ", "#"));
// console.log(str.replaceAll(" ", ","));
// console.log(str.slice(0, 5));
// let test = str.split(" ");

// console.log(test.join(", #"));

// console.log(str.startsWith("Lorem"));
// let strrr = "lL";
// console.log(strrr.charCodeAt(1));

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// let str = "this    just     text";
// let arr = str.split("");
// arr.splice(1, 2);
// console.log(arr.join(""));

// kabisa yilini topish
// let str = "1223";
// let test = str.padEnd(26, "*");
// console.log(test);