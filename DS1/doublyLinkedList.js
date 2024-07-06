class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList{
    constructor(){
        this.head = 0
        this.tail = 0
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let listed = ''
            let curr =  this.head
            while(curr){
                listed += `${curr.value} `
                curr = curr.next
            }
            console.log(listed)
        }
    }

    reverse(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let reversed = ''
            let curr =  this.tail
            while(curr){
                reversed += `${curr.value} `
                curr = curr.prev
            }
            console.log(reversed)
        }
    }

    prepend(value){
        let node = new Node(value)
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

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }else if(this.size == 1){
            this.head = null
            this.tail = null
        }else {
            this.head.next.prev = null
            this.head = this.head.next
        }
        
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }else if(this.size == 1){
            this.head = null
            this.tail = null
        }else{
            this.tail.prev.next = null
            this.tail = this.tail.prev
        }
    }

}

let list = new doublyLinkedList()

list.prepend(40)
list.prepend(50)
list.prepend(60)
list.append(70)
list.removeFromFront()
list.removeFromEnd()
list.append(700)
list.print()
// list.reverse()

// console.log(list.getSize())