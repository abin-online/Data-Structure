class circularQueue {
    constructor(capacity) {
        this.capacity = capacity
        this.items = []
        this.currLength = 0
        this.front = -1
        this.rear = -1
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currLength += 1
            if (this.front == -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        this.items[this.front] = null
        this.front = (this.front + 1 ) % this.capacity
        this.currLength -= 1
        if (this.isEmpty()) {
            this.rear = -1
            this.front = -1
        }
    }

    isFull() {
        return this.capacity === this.currLength
    }

    isEmpty() {
        return this.currLength === 0
    }

    peek() {
        return this.items[this.front]
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("QUEUE IS EMPTY");

        } else {
            let i
            let str = ''
            for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " "
            }
            str += this.items[i]
            console.log(str);

        }

    }

}

let circle = new circularQueue(5)
circle.enqueue(79)
circle.enqueue(56)
circle.enqueue(98)
//circle.dequeue()
console.log(circle);
circle.printQueue()