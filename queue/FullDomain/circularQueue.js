class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currLength = 0
        this.front = -1
        this.rear =  -1
    }

    isFull() {
        return this.capacity == this.currLength
    }

    isEmpty() {
        return this.currLength === 0
    }

    enqueue(element) {
        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element
            this.currLength++
            if(this.front == -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if(this.isEmpty()){
            return null
        }
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        if(this.isEmpty){
            this.front = -1
            this.rear = -1
        }
    }

    print() {
        let i
        let output = ''
        for(i = this.front ; i !== this.rear ; i = (i+1)% this.capacity) {
            output += `${this.items[i]} `
        }
        output += this.items[i]
        console.log(output);

    }
}

const circle = new CircularQueue(5)

circle.enqueue(44)
circle.enqueue(45)
circle.enqueue(55)

circle.print()
console.log(circle)
