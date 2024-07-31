class minHeap {
    constructor() {
        this.heap = []
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1
    }

    getRightChildIndex(index) {
        return 2 * index + 2
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    heapifyUp(index) {
        let parentIndex = this.getParentIndex(index)
        while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null
        }
        if (this.heap.length === 1) {
            return this.heap.pop()
        }

        let root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return root

    }

    heapifyDown(index) {
        let smallest = index
        LeftChildIndex  = this.getLeftChildIndex(index)
        rightChildIndex = this.getRightChildIndex(index)

        if (smallest < this.heap.length && this.heap[LeftChildIndex] < this.heap[smallest]){
            smallest = LeftChildIndex
        }

        if(smallest < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]){
            smallest = rightChildIndex
        }

        if(smallest != index){
            [this.heap[index] , this.heap[smallest]] = [this.heap[smallest] , this.heap[index]]
            this.heapifyDown(smallest)
        }
        
    }

    getMin(){
        return this.heap.length > 0 ? this.heap[0] : null  
    }

    printHeap(){
        console.log(this.heap);
    }

}