class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
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
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    print(){
        let listed = ''
        let curr = this.head
        while(curr){
            listed+= `${curr.value} `
            curr = curr.next
        }
        console.log(listed)
    }

    reverse(){
        let reverse = ''
        let curr = this.head
        while(curr){
            reverse = `${curr.value} `
            curr = curr.prev
        }
    }



}

let list = new linkedList()

list.append(45)
list.prepend(55)
list.append(22)
list.print()