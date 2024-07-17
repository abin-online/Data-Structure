class Queue {
    constructor() {
        this.items = []
        this.front = 0
        this.rear = 0
    }

    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }

    dequeue() {
        delete this.items[this.front]
        this.front++
    }

    peek() {
        return this.items[this.front]
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek(){
        return this.items[this.front]
    }

    search(element){
        return this.items.indexOf(element)
    }

    printQueue(){
        if(this.isEmpty()){
            console.log("QUEUE IS EMPTY");
        }else{
            console.log(this.items.join(" "));
        }    
    }
}

let qqq = new Queue()
qqq.enqueue(39)
qqq.enqueue(40)
qqq.dequeue()
qqq.enqueue(87)
console.log("PEEK " , qqq.peek());

qqq.printQueue()
qqq.search(87)