class Queue{
    constructor(){
        this.items = []
        this.front = 0
        this.rear = 0
    }

    isEmpty(){
        return this.items.length === 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        delete this.items[this.front] 
        this.front++
    }

    peek(){
        console.log(this.items[this.front]);
    }

    printQ(){
        console.log(this.items.join(" ")); 
    }


}

let Qqqq = new Queue()

Qqqq.enqueue(100)
Qqqq.dequeue()
Qqqq.enqueue(300)
Qqqq.enqueue(400)
Qqqq.enqueue(200)
Qqqq.peek()
Qqqq.printQ()