//creating a node

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){  
        return this.size
    }
}


let list = new linkedList();

console.log("isEmpty : " , list.isEmpty())

 console.log("size : " , list.getSize())  