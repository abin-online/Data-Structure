class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
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
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    print(){
        let curr = this.head
        let result = ''
        while(curr){
            result +=  `${curr.value} `
            curr = curr.next
        }
        console.log(result)
    }

    reverse(){
        let curr = this.tail
        let result = ''
        while(curr) {
            result += ` ${curr.value}`
            curr = curr.prev
        }
        console.log(result)
    }

    removeFromFront() {
        if(this.isEmpty()){
            return null
        }
        
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
    }

    removeFromEnd() {
        if(this.isEmpty()){
            return null
        }

        if(this.size === 1){
            const value = this.tail.value
            this.head = null
            this.tail = null
            this.size--
            return value
        }else{
            const value = this.tail.value
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
            return value
        }
    }
}