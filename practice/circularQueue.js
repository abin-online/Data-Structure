class circularQueue {
    constructor(capacity) {
        this.capacity = capacity
        this.items = []
        this.currLength = 0
        this.front = -1
        this.rear = -1
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
        }
    }

    dequeue() {
        let removeElement = this.items[this.front]
        if (!this.isEmpty()) {
            this.items[this.front] = null
            this.front = (this.front + 1) % this.capacity
            if(this.isEmpty()){
                this.rear = -1
                this.front = -1
            }
            return removeElement
        }else{
            return null
        }
    }
}