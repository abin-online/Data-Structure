// class circularQueue{
//     constructor(capacity){
//         this.items = new Array(capacity)
//         this.capacity = capacity
//         this.currLength = 0
//         this.front = -1
//         this.rear = -1
//     }

//     isFull(){
//         return this.capacity === this.currLength
//     }

//     isEmpty(){
//         return this.currLength === 0
//     }

//     enqueue(element){
//         if(!this.isFull()){
//             this.rear = (this.rear+1) % this.capacity
//             this.items[this.rear] = element
//             this.currLength++
//             if(this.front == -1){
//                 this.front = this.rear
//             }
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         this.items[this.front] = null
//         this.front = (this.front + 1) % this.capacity
//         this.currLength -= 1
//         if(this.isEmpty()){
//             this.front = -1
//             this.rear = -1
//         }
        
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[this.front]
//         }
//         return null
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("CIRCULAR QUEUE EMPTY");
//         }else{
//             let i
//             let str = ''
//             for(i = this.front ; i !== this.rear; i = (i+1)%this.capacity){
//                 str += this.items[i] +" "
//             }
//             str += this.items[i]
//             console.log(str);
//         }
//     }

// }


class circularQueue{
    constructor(capacity){
        this.capacity = capacity
        this.items = new Array(capacity)
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    isFull(){
        return this.capacity === this.currentLength
    }

    isEmpty(){
        this.currentLength === 0
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1
            if(this.front == -1){
                this.front = this.rear
            }
        }
        return
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1
        if(this.isEmpty()){
            this.front = -1
            this.rear = - 1
        }
    }

    print(){
        let result = ''
        let i
        for(i  = this.front ; i != this.rear ; i = (i+1) % this.capacity){
            result += this.items[i] + ' '
        }
        result += this.rear;
        return result
    }
}

let circle = new circularQueue(5)

let arr = [3,1,55,43,24]
for(let i = 0 ; i < 5; i++){
    circle.enqueue(arr[i])
}
console.log(circle.print())

