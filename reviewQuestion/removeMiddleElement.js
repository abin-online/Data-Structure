class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){
        let listed = ''
        let curr = this.head
        while(curr){
            listed += `${curr.value} `
            curr = curr.next
        }
        console.log(listed)
    }

    removeMiddleElement(){
        let middle = Math.floor(this.getSize()/2)
        let prev = this.head
        let i = 0;
        for(let i = 0 ; i < middle; i++){
            
            prev = prev.next
        }
        let removeNode = prev.next;
        prev.next = removeNode.next
        this.size--
    }
}

let list = new linkedList()

list.prepend(45)
list.prepend(55)
list.prepend(65)
list.removeMiddleElement()
list.print()