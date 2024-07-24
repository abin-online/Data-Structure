// const obj = {
//     name: "nithina",
//     loction:{
//         city:"Chennai"
//     }
// }


// console.log(obj.hasOwnProperty("name"))

// console.log(obj.loction.pin?.code);

let arr = [1,2,3,4,5]

const [one,two,...rest] = arr

console.log(one);
console.log(two);
console.log(rest);

let arr2 = [...arr,6,7]

console.log(arr2);