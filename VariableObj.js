//Creating all const variable i.e const a=5,b=10
const myObj = {},
  str = "str",
  rand = Math.random(),
  obj2 = {};

console.log(myObj);
myObj.type = "Dot syntax for key value type";
console.log(myObj.type);

myObj["dateCreated"] = "This key has space";
console.log(myObj);
//date created defined vako xaina variable tesaile undefined aauxa === myObj[dateCreated] = "This key has space"

myObj[str] = "This key is a string";
console.log(myObj.str);
//str defined vako xa tesaile use garna pauxa sidhai

myObj[""] = "this key is an empty string";
console.log(myObj[""]);
