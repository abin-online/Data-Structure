class MaxHeap{
    constructor(){
        this.heap =  []
    }

    getMax(){
        return this.heap[0]
    }

    getParentIndex(index){
        return Math.floor((index - 1)/2)
    }

    getLeftChildIndex(index){
        return 2 * index - 1
    }

    getRightChildIndex(index){
        return 2 * index + 2
    }

    insert()
}