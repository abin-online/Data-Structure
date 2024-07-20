class Node{
    construct(value){
        this.value = value
        this.next = null
    }
}

class stack{
    constructor(){
        this.head = null
    }

    isEmpty(){
        return this.head === null
    }

    push(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
    }

    
}