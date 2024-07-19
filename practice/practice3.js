class circularQueue {
    constructor(capacity) {
        this.capacity = capacity
        this.items = []
        this.front = -1
        this.rear = -1
        this.currLength = 0
    }

    isFull() {
        return this.capacity == this.currLength
    }

    isEmpty() {
        return this.currLength == 0
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currLength += 1
            if (this.front == -1) {
                this.front = this.rear
            }
        } else {
            console.log("QUEUE IS FULL");
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            this.items[this.front] = null
            this.front = (this.front + 1) % this.capacity
            this.currLength += 1
            if (this.isEmpty()) {
                this.rear = -1
                this.front = -1
            }
        } else {
            console.log("QUEUE IS EMPTY");
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("q is empty");
        } else {
            let i
            let result = ''
            for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
                result += this.items[i] + " "
            }
            result += this.items[i]
            console.log(result);

        }

        //console.log(this.items.join(" "));
    }

}

let cQueue = new circularQueue(5)
cQueue.enqueue(45)
cQueue.enqueue(55)
cQueue.enqueue(65)
console.log(cQueue);
cQueue.print()
