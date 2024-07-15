class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    getSize(){
        return this.items.length
    }

    print(){
        console.log(this.items.join(" "))
    }

}

const Q = new Queue()

Q.enqueue(56)
Q.enqueue(74)
Q.enqueue(98)
Q.dequeue()
console.log(Q.getSize());
Q.print();