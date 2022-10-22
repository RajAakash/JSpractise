const duck = {
  namew: "bob",
  color: "yellow",
  callName: () => {
    console.log(`this is ${duck.namew}`);
  },
};

duck.callName();

//Reflect in js
console.log(Reflect.has(duck, "color"));
