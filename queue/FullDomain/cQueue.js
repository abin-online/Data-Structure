class circularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    isFull(){
        return this.currentLength === this.capacity
    }

    isEmpty(){
        return  this.currentLength === 0
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = value
            this.currentLength++
            if(this.front == -1){
                this.front = this.rear
            }
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            this.items[this.front] = null
            this.front = (this.front + 1) % this.capacity
            this.currentLength--
            if(this.isEmpty()){
                this.front = -1
                this.rear = -1
            }
        }
    }

    print(){
        let i
        let result = []
        for (i = this.front ; i != this.rear ; i = (i+1) % this.capacity){
            result.push(this.items[i])
        }
        result.push(this.items[i])
        console.log(...result)
    }

}

// const cQueue = new circularQueue(3)
// cQueue.enqueue(12)
// cQueue.enqueue(13)
// cQueue.enqueue(14)
// console.log(cQueue)
//.print()

const circle = new circularQueue(5)

circle.enqueue(44)
circle.dequeue()
circle.enqueue(45)
circle.enqueue(55)

circle.print()
console.log(circle)