class MaxHeap{
    constructor(array){
        this.heap = array
        this.buildHeap()
    }

    buildHeap(){
        for(let i = this.heap.length - 1 ; i >= 0 ; i--){
            this.heapifyDown(i)
        }
    }


    heapifyDown(index){
        let largest = index
        let leftChildIndex = 2 * index + 1
        let rightChildIndex = 2 * index + 2

        if(this.heap.length > 0 && this.heap[index] < this.heap[leftChildIndex]){
            largest = leftChildIndex
        }

        if(this.heap.length > 0 && this.heap[index] < this.heap[rightChildIndex]){
            largest = rightChildIndex
        }

        if(largest != index){
            [this.heap[index] , this.heap[largest]] = [this.heap[largest] , this.heap[index]] 
            this.heapifyDown(largest)
        }
    }

    extractMax(){
        if(this.heap.length == 0) return null
        if(this.heap.length == 1) return this.heap.pop()
        
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return max
    }
}




