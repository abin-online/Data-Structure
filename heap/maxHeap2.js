class maxHeap{
    constructor(){
        this.heap = []
    }

    isEmpty(){
        return this.heap.length === 0
    }

    getParentIndex(index){
        return Math.floor((index - 1)/2)
    }

    getLeftChildIndex(index){
        return 2 * index + 1
    }

    getRightChildIndex(index){
        return 2 * index + 2
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    heapifyUp(index){
        let parentIndex = this.getParentIndex(index);
        while(index > 0 && this.heap[parentIndex] < this.heap[index]){
            [this.heap[index] , this.heap[parentIndex]] = 
            [this.heap[parentIndex] , this.heap[index]];
            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }

    remove(){
        if(this.heap.length === 0){
            console.log('cant remove')
            return false
        }
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        let root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return root
    }

    heapifyDown(index){
        let largest = index
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)
        if(leftChildIndex < this.heap.length && this.heap[largest] < this.heap[leftChildIndex]){
            largest = leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[largest] < this.heap[rightChildIndex]){
            largest = rightChildIndex
        }
        if(largest != index){
            [this.heap[largest], this.heap[index]] =
            [this.heap[index], this.heap[largest]]
            this.heapifyDown(largest)
        }
    }

    print(){
        return this.heap.join(" ")
    }
}

const heap = new maxHeap()

const arr = [4,-5, 9, 3, 33, -6]

for(let i = 0 ; i < arr.length ; i++){
    heap.insert(arr[i])
}

let result = ''

for(let i = 0 ; i< arr.length ; i++) {
    result += `${heap.remove()} `
}


console.log(result)
