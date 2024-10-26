// Destructuring (object arr)
// OBject Methods

// let user = {
//   name: "John Doe",
//   age: 30,
//   number: "123",
// };

// let { name, number, age } = user;
// console.log(age);

// Destructuring (array arr)
// let arr = ["olma", "anor", "banan", "kiwi"];
// let [olma, anor,ki23, banan ] = arr;
// console.log(ki);

// destructuring with nested objects
// let person = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: {
//       name: "NY",
//     },
//   },
// };
// let {
//   name,
//   age,
//   address: {
//     street,
//     city,
//     state: { name: nameofState },
//   },
// } = person;
// console.log(name);

// Destructuring with nested array
// let friuts = [1, 2, 3, ["apple,", "kiwi", "banana"]];
// let [bir, ikki, uch, [a, k, b]] = friuts;
// console.log(k);

// let longUseOBject = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: {
//       name: "NY",
//     },
//   },
//   hobbies: ["reading", "coding", [12, 34, 66, 3]],
// };
// console.log(longUseOBject.hobbies[2][0]);
// let {
//   name,
//   age,
//   address: {
//     street,
//     city,
//     state: { name: nameState },
//   },
//   hobbies: [read, code, [onikki, ottort, oltolti, uch]],
// } = longUseOBject;
// console.log(onikki);

// let longPersonObject = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: {
//       name: "NY",
//     },
//   },
//   hobbies: ["reading", "coding", [12, 34, 66, 3]],
//   family: {
//     father: {
//       name: "Father John Doe",
//       age: 60,
//     },
//     mother: {
//       name: "Mother John Doe",
//       age: 58,
//     },
//     siblings: [
//       {
//         name: "Brother John Doe",
//         age: 28,
//       },
//       {
//         name: "Sister John Doe",
//         age: 26,
//       },
//     ],
//   },
// };

// let {
//   name,
//   age,
//   address: {
//     street,
//     city,
//     state: { name: nameofState },
//   },
//   hobbies: [read, code, [onikki, ottort, oltolti, uch]],
//   family: {
//     father: { name: nameofFather, age: ageOfFather },
//     mother: { name: nameofMother, age: ageOfMother },
//     siblings: [
//       { name: nameofSib1, age: ageofSib1 },
//       { name: nameofSib2, age: ageofSib2 },
//     ],
//   },
// } = longPersonObject;

// console.log(nameofSib2);

// .//////////////////// object methods////////////////
// - Object.keys()
//     - This method returns an array such that the elements of the array consist of all the keys of the object.
// - Object.values()
//     - This method returns an array such that the elements of the array consist of all the values of the object.
// - Object.entries()
//     - The **`Object.entries()`** static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
// - Object.fromEntries()
//     - The **`Object.fromEntries()`** static method transforms a list of key-value pairs into an object.
// - Object.freeze()
//     - You can't add new properties to the object
//     - You can't modify the properties if they are not objects or arrays themselves.
//     - You can't delete properties from the object
// - Object.isFrozen**()**
//     - This method checks the object frozen or not.
// - Object.seal()
//     - You can't remove or add elements to the object.
//     - You **can** modify existing properties.
// - Object.isSealed**()**
//     - This method checks the object sealed or not.

// let user = {
//   name: "John Doe",
//   age: 30,
//   number: "123",
//   address: "tashkent",
// };
// let test = Object.keys(user);
// console.log(test);

// let test = Object.values(user);
// console.log(test);

// let test = Object.entries(user);
// console.log(test);

// let res = test.map((val, inx) => (val[0] = val[0] + " " + inx));
// // console.log(res);
// let test2 = Object.fromEntries(test);

// console.log(test2);

////////////////////// object.freeze();
// let user = {
//   name: "John Doe",
//   age: 30,
//   number: "123",
//   address: "tashkent",
// };
// Object.freeze(user);
// user.email = "john@example";
// user.name = "Johnbek";
// delete user.name;
// console.log(user);
// console.log(Object.isFrozen(user));

// object.seal()
// let user = {
//   name: "John Doe",
//   age: 30,
//   number: "123",
//   address: "tashkent",
// };

// // Object.seal(user);

// user.email = "john@example";
// delete user.name;
// user.name = "Johnbek";
// console.log(user);

// console.log(Object.isSealed(user));

// let person = {
//   name: "John Doe",
//   age: 30,
//   email: "john@example",
//   address: "tashkent",
//   hobby: "example",
// };

// object.keys
// object.values
// ...

// homework
// const product = {
//     name: "Laptop",
//     price: 1200,
//     category: "Electronics",
//     stock: 25
//   };
// product objectini yarating
// Object.keys(), Object.values(), va Object.entries()  dan foydalanib consolda koring natijalrini
// ushbu arrayni hosil qiling [name0,price1,category2,stock3]
// let prices={
//     first:1200,
//     second:2500,
//     third:3000,
//     fourth:4500,
//     fifth:6000
// }
// barcha qiylatlar yigindisini topuvchi kod yozing

// user objectini yarating va confirmda userdan ushbu object freeze bolishi kkmi yoki yoqligini sorang
// ha deyilsa uni muzlating aks holda yoq

// const company = {
//   name: "Global Tech Solutions",
//   headquarters: {
//     address: {
//       street: "789 Innovation Blvd",
//       city: "Tech City",
//       state: {
//         name: "Innovatia",
//         code: "IN",
//       },
//       country: {
//         name: "Technoland",
//         code: "TN",
//       },
//     },
//     offices: {
//       northAmerica: {
//         regionalHead: "Ms. Susan Clarke",
//         contact: {
//           phone: "456-789-1234",
//           email: "susan@globaltech.com",
//         },
//         departments: {
//           software: {
//             head: "Mr. John Doe",
//             teamLead: {
//               name: "Ms. Alice Johnson",
//               contact: {
//                 email: "alice@globaltech.com",
//                 phone: "456-123-7890",
//               },
//             },
//           },
//           hr: {
//             head: "Mrs. Sarah Connors",
//             teamLead: {
//               name: "Mr. Bruce Wayne",
//               contact: {
//                 email: "bruce@globaltech.com",
//                 phone: "456-456-7899",
//               },
//             },
//           },
//         },
//       },
//       europe: {
//         regionalHead: "Mr. Liam O'Sullivan",
//         contact: {
//           phone: "789-456-3210",
//           email: "liam@globaltech.com",
//         },
//         departments: {
//           marketing: {
//             head: "Ms. Natasha Romanoff",
//             teamLead: {
//               name: "Mr. Steve Rogers",
//               contact: {
//                 email: "steve@globaltech.com",
//                 phone: "123-321-4567",
//               },
//             },
//           },
//           finance: {
//             head: "Mr. Tony Stark",
//             teamLead: {
//               name: "Ms. Pepper Potts",
//               contact: {
//                 email: "pepper@globaltech.com",
//                 phone: "987-654-3210",
//               },
//             },
//           },
//         },
//       },
//     },
//   },
//   staff: {
//     CEO: {
//       name: "Mr. Elon Musk",
//       experience: "20 years",
//       contact: {
//         email: "elon@globaltech.com",
//         phone: "999-888-7777",
//       },
//     },
//     executives: {
//       CTO: {
//         name: "Ms. Sheryl Sandberg",
//         experience: "18 years",
//         contact: {
//           email: "sheryl@globaltech.com",
//           phone: "555-555-5555",
//         },
//       },
//       CFO: {
//         name: "Mr. Warren Buffett",
//         experience: "25 years",
//         contact: {
//           email: "warren@globaltech.com",
//           phone: "444-444-4444",
//         },
//       },
//     },
//   },
// };
///////////////////////////////////////////
// const eCommerceStore = {
//     storeName: "Tech Market",
//     location: {
//       country: "Shopland",
//       city: "Retail City",
//       address: {
//         street: "456 Commerce St",
//         zipCode: "45678"
//       },
//       departments: [
//         {
//           name: "Electronics",
//           head: "Alice Johnson",
//           products: [
//             {
//               id: 1,
//               name: "Laptop",
//               brand: "TechBrand",
//               specs: {
//                 processor: "Intel i7",
//                 memory: "16GB",
//                 storage: "512GB SSD"
//               },
//               price: 1200,
//               stock: {
//                 available: 35,
//                 reserved: 5
//               }
//             },
//             {
//               id: 2,
//               name: "Smartphone",
//               brand: "PhoneCorp",
//               specs: {
//                 processor: "Snapdragon 888",
//                 memory: "8GB",
//                 storage: "128GB"
//               },
//               price: 900,
//               stock: {
//                 available: 100,
//                 reserved: 20
//               }
//             }
//           ]
//         },
//         {
//           name: "Home Appliances",
//           head: "Bob Smith",
//           products: [
//             {
//               id: 3,
//               name: "Refrigerator",
//               brand: "HomeCool",
//               specs: {
//                 capacity: "300L",
//                 energyRating: "4 stars"
//               },
//               price: 800,
//               stock: {
//                 available: 10,
//                 reserved: 2
//               }
//             },
//             {
//               id: 4,
//               name: "Washing Machine",
//               brand: "CleanIt",
//               specs: {
//                 capacity: "7kg",
//                 type: "Front Load"
//               },
//               price: 600,
//               stock: {
//                 available: 15,
//                 reserved: 3
//               }
//             }
//           ]
//         }
//       ]
//     },
//     employees: {
//       managers: [
//         {
//           name: "John Doe",
//           department: "Electronics",
//           contact: {
//             phone: "123-456-7890",
//             email: "john@techmarket.com"
//           }
//         },
//         {
//           name: "Jane Smith",
//           department: "Home Appliances",
//           contact: {
//             phone: "321-654-0987",
//             email: "jane@techmarket.com"
//           }
//         }
//       ],
//       sales: [
//         {
//           name: "Tom Hardy",
//           department: "Electronics",
//           contact: {
//             phone: "111-222-3333",
//             email: "tom@techmarket.com"
//           }
//         },
//         {
//           name: "Emily Blunt",
//           department: "Home Appliances",
//           contact: {
//             phone: "444-555-6666",
//             email: "emily@techmarket.com"
//           }
//         }
//       ]
//     },
//     promotions: {
//       current: [
//         {
//           id: "PROMO1",
//           name: "Spring Sale",
//           discount: "10%",
//           applicableProducts: [1, 2]
//         },
//         {
//           id: "PROMO2",
//           name: "Summer Clearance",
//           discount: "15%",
//           applicableProducts: [3, 4]
//         }
//       ],
//       upcoming: [
//         {
//           id: "PROMO3",
//           name: "Fall Sale",
//           discount: "20%",
//           applicableProducts: [1, 4]
//         }
//       ]
//     },
//     orderHistory: [
//       {
//         orderId: "ORD001",
//         customer: {
//           name: "Michael Scott",
//           contact: {
//             phone: "123-789-4560",
//             email: "michael@dundermifflin.com"
//           }
//         },
//         items: [
//           {
//             productId: 1,
//             quantity: 1,
//             pricePerUnit: 1200
//           },
//           {
//             productId: 3,
//             quantity: 2,
//             pricePerUnit: 800
//           }
//         ],
//         totalAmount: 2800,
//         status: "Delivered"
//       },
//       {
//         orderId: "ORD002",
//         customer: {
//           name: "Pam Beesly",
//           contact: {
//             phone: "456-123-7890",
//             email: "pam@dundermifflin.com"
//           }
//         },
//         items: [
//           {
//             productId: 2,
//             quantity: 1,
//             pricePerUnit: 900
//           }
//         ],
//         totalAmount: 900,
//         status: "Pending"
//       }
//     ]
//   };
  