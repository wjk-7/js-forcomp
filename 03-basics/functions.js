// function addTwoNum(num1,num2){
//     return num1 + num2
// }
// console.log(addTwoNum(3,4))
// function addNum(num1 , num2){
//     console.log(num1 + num2)
// }
// addNum(2,4)
const obj1 = {
    name : "wahaj",
    age : 22,
    address : "pakistan"  
}
function anObject(anyobject){
    return `the name is ${anyobject.name} and age is ${anyobject.age}`
}
// console.log(anObject(obj1))
const testarr = [200,300,400,500]
function secondval(anyarray){
    return anyarray[2]
}
// console.log(secondval(testarr));
function cartPrice(...val1){
    return val1
}
// console.log(cartPrice(200,800,300,200))
function logIn(name){
    if(name == undefined){
        console.log("incorrect username")
    }
    else return `${name} just logged in`
}
console.log(logIn(""))