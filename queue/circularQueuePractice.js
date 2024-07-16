class circularQueue{
    constructor(capacity) {
        this.capacity = capacity
        this.items = []
        this.currLength = 0
        this.front = -1
        this.rear = -1
    }

    isFull(){
        return this.capacity === this.currLength
    }

    isEmpty(){
        return this.currLength === 0
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currLength += 1
            if(this.front == -1){
                this.front = this.rear
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }else{
            this.items[this.front] = null
            this.front = (this.front + 1 ) % this.capacity
            this.currLength -= 1
            if(this.isEmpty()){
                this.front = -1
                this.rear = -1
            }
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("EMPTY");
        }else{
            let i 
            let str = ''
            for( i = this.front ; i != this.rear ; i = (i+1)%this.capacity){
                str += this.items[i] + " "
            }
             str += this.items[i]
            console.log(str);
        }
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
    }
}

let circle = new circularQueue(5)

circle.enqueue(23)
circle.enqueue(33)
circle.enqueue(43)
circle.enqueue(53)
// circle.dequeue()
circle.enqueue(73)
console.log(circle.isEmpty());
console.log(circle.isFull());
console.log(circle.peek());


circle.print()

