class circularQueue{
    constructor(capacity){
        this.capacity = capacity
        this.currLength = 0
        this.rear = -1
        this.front = -1
    }

    isfull(){
        return this.capacity == this.currLength
    }

    isEmpty(){
        return this.currLength == 0
    }
        
    enqueue(element){
        if(!this.isfull()){
            this.items[this.rear] = element
            this.rear = (this.rear + 1) % this.capacity
            this.currLength += 1
            if(this.front == -1){
                this.front = this.rear
            }
        }else{
            console.log();
        }
    }
    
}
1,11