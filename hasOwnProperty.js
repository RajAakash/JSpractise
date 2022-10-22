const name = ["Aakash", "Raj", "Dhakal"];

console.log(name.hasOwnProperty(1));

//it doesnot have fourth item
console.log(name.hasOwnProperty(4));

//for Objects
const obj = {};
obj.name = "Aakash";
console.log(obj.hasOwnProperty("name"));
