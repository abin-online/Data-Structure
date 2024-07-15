class Queue{
    constructor(){
        this.items = []
        this.front = 0
        this.rear = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        //const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
    }

    isEmpty(){
        return this.rear === this.front
    }

    peek(){
        return this.items[this.front]
    }

    getSize(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items.join(" "));
    }
}

let Que = new Queue() 

console.log(Que.isEmpty());

Que.enqueue(45)
Que.enqueue(55)
Que.enqueue(65)
Que.enqueue(75)
Que.dequeue()
Que.print()