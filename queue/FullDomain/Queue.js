class Queue{
    constructor(){
        this.items = []
        this.rear = 0 
        this.front = 0
    }

    enqueue(value) {
        this.items[this.rear] = value
        this.rear++
    }

    dequeue(){
        delete this.items[this.front]
        this.front++
    }

    isEmpty(){
        return this.front == this.rear
    }

    getSize() {
        return Math.abs(this.front - this.rear)
    }

    search(value) {
        return this.items.indexOf(value)
    }

    print() {
        let output = ''
        for(let i of this.items) {
            if(i) {
                output += `${i} `
            }
        }
        console.log(output)
    }
}

const Q = new Queue()

Q.enqueue(44)
Q.enqueue(45)
Q.enqueue(43)
Q.enqueue(46)
Q.dequeue()

Q.print()

console.log(Q.getSize());
console.log(Q.search(45));


