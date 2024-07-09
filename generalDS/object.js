const obj = {
    name: "Abin",
    age: 22,
    sayName : function(){
        console.log(this.name)
    }
}

obj.sayName()