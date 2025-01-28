const specialid = Symbol("key2")
const userId = {
    name : "wahaj",
    id : 45,
    [specialid]: "key1",
    address : "pakistan",
    IsloggenIn : false,

}
userId.school = 45;
// console.log(userId);
// Object.freeze(userId);
userId.school = "nasra";
userId.welcome = function(){
    console.log(`hello how are you ${this.name}`);
    
}
console.log(userId.welcome());

