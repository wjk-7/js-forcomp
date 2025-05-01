let key1 = Symbol("unique");
let obj = {
    name:"wahaj",
    age: 22,
    career: "none",
    [key1]: "iskey"
}
obj[key1] = "not ok";
console.log(obj);
console.log(`according to your cv your name is: ${obj.name}`);
