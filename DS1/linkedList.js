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

    prepend(value){  //prepend
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let curr = this.head;
            let listed = ''
            while(curr){
                listed += `${curr.value} `;
                curr = curr.next
            }
            console.log(listed)
        }
    }
}


let list = new linkedList();

console.log("isEmpty : " , list.isEmpty())

console.log("size : " , list.getSize())  

list.prepend(10)
list.prepend(20)
list.prepend(30)

list.print()
console.log(list)