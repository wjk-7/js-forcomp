const wah = {
    name : "wahaj",
    age: 22,
    state:"karachi",
    welcome : function(){console.log(`hello ${this.name}`);
    // console.log(this)
}
}
// console.log(wah)
// wah.welcome()
// console.log(this)
function chai(){
    console.log(this)
}

// chai()
const chaitwo = () => {
    console.log(this)
}
// chaitwo()
const wahtwo = () => ({username: "wahaj"})
console.log(wahtwo());
// wahtwo();
