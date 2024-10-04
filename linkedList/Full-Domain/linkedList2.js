class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next != null) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print() {
        let curr = this.head
        let result = ''
        while (curr) {
            result += `${curr.value} `
            curr = curr.next
        }
        console.log(result)
    }

    reverseA() {
        let curr = this.head
        let prev = null
        let next
        while (curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    insert(value, index) {
        const node = new Node(value)
        if (index < 0 || index >= this.size) {
            console.log('Cannot insert')
            return
        } else if (index === 0) {
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

    removeValue(value) {
        if (this.isEmpty()) {
            console.log('Cant remove');
            return
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return
        }

        let prev = this.head
        while (prev.next && prev.next.value !== value) {
            prev = prev.next
        }
        if (prev.next) {
            let removeNode = prev.next
            prev.next = removeNode.next
            this.size--
        } else {
            console.log('value not found')
        }

    }

    removeIndex(index) {
        if (index < 0 || index >= this.size) {
            console.log('Cant remove')
            return
        }
        if (index === 0) {
            this.head = this.head.next
            this.size--
            return
        }
        let prev = this.head
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next
        }
        let removeNode = prev.next
        prev.next = removeNode.next
        this.size--
    }

    removeMiddleElement() {
        let index = Math.floor(this.size / 2);
        let prev = this.head
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next
        }
        let removeNode = prev.next
        prev.next = removeNode.next
        this.size--
    }

    removeAllDuplicates() {
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        let prev = null
        let seen = new Set()
        while (curr) {
            if(seen.has(curr.value)) {
                prev.next = curr.next
            }else{
                seen.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }
}

const list = new LinkedList()

list.append(23)
list.prepend(22)
list.append(33)
list.append(33)
list.reverseA()
list.print()
// list.removeMiddleElement()
list.removeAllDuplicates()
list.print()