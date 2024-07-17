const obj = {}
obj.name = "abin"

console.log(obj.hasOwnProperty("name")); // true

obj.hasOwnProperty = true


console.log(obj.hasOwnProperty("name"));  //TypeError: obj.hasOwnProperty is not a function

