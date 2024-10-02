class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class circularLinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    getSize(){
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            node.next = this.head
        }else {
            let prev = this.head
            while(prev.next !== this.head) {
                prev = prev.next
            }
            node.next = this.head
            prev.next = node
            this.head = node
            this.size++
        }
    }
    
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            node.next = this.head
        }else{
            let prev = this.head
            while(prev.next !== this.head) {
                prev = prev.next
            }
            prev.next = node
            node.next = this.head
        }
        this.size++
    }

    print() {
        let listed = ''
        let result = []
        let curr = this.head
        do{
            result.push(curr.value)
            curr = curr.next
        }while(curr !== this.head)
        console.log(result)
    }
}

const cList = new circularLinkedList(5)

cList.append(33)
cList.append(35)
cList.append(36)
cList.append(37)
cList.prepend(78)

cList.print()