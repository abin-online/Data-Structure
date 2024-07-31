class maxHeap{
    constructor(){
        this.heap = []
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
        let parentIndex = this.getParentIndex(index)
        while(index > 0 && this.heap[parentIndex] < this.heap[index]){
            [this.heap[index] , this.heap[parentIndex]] = [this.heap[parentIndex] , this.heap[index]]

        }
    }
}f