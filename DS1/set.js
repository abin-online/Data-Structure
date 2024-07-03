const set = new Set([3,4,2,2,9]);
set.add(5) //add
console.log(set.has(3)) //check whether value in or not

set.delete(3) // delete
console.log(set)

//iteration using for of
for(const i of set){
    console.log(i)
}


 
set.clear() //clear all values of set
console.log("set after cleared",set)