class queue{
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
        this.items[this.front] = null
        this.front++
    }

    isEmpty(){
        return this.items.length === 0
    }

    search(element){
        return this.items.indexOf(element)
    }

    print(){
        if(this.isEmpty()){
            console.log("QUEUE IS EMPTY");
        }else{
            console.log(this.items.join(" "));
        }
        
    }
}

let Que = new queue()
Que.print()
Que.enqueue(34)
Que.dequeue()
Que.enqueue(34)
Que.enqueue(44)
Que.enqueue(54)
Que.print()