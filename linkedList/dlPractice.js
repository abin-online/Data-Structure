class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {

            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    print() {
        let listed = ''
        let curr = this.head
        while (curr) {
            listed += `${curr.value} `
            curr = curr.next
        }
        console.log(listed)
    }

    reverse() {
        let reverse = ''
        let curr = this.tail
        while (curr) {
            reverse += `${curr.value} `
            curr = curr.prev
        }
        console.log(reverse)
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null
        } else if (this.size == 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }else if(this.size == 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
    }

}

let list = new doublyLinkedList()

list.append(23)

list.prepend(22)

list.append(32)

list.print()
list.reverse()
list.removeFromEnd()
list.print()
list.removeFromFront()

list.print()

