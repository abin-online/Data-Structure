class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size
    }

    isEmpty() {
        return this.size === 0
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
            this.tail = node
        }
        this.size++
    }

    print() {
        let curr = this.head
        let listed = ''
        while (curr) {
            listed += `${curr.next} `
            curr = curr.next
        }
        console.log(listed)
    }

    insert(value, index) {
        let node = new Node(value)
        if (index < 0 || index >= this.size) {
            return null
        } else if (index == 0) {
            this.prepend(value)
        } else {

            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }

    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }else if(this.size == 1){
            this.head = null
            this.tail = null
            this.size--
        }else{
            this.head = this.head.next
            this.size--
        }
    }

    removeAtEnd(){
        if(this.isEmpty()){
            return null
        }else if(this.size == 1){
            this.head = null
            this.tail = null
            this.size--
        }else{
            let prev = this.head
            while(prev.next.next != null){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
            this.size--
        }
    }
}