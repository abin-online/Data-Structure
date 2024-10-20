class MaxHeap{
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
            [this.heap[index] , this.heap[parentIndex]] = 
            [this.heap[parentIndex] , this.heap[index]]
            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }

    remove(){
        if(this.heap.length == 0) return null
        if(this.heap.length == 1) return this.heap.pop()
        let root = this.heap[0]
        this.heap[0] = this.heap.pop()
        heapifyDown(0)
        return root
    }

    heapifyDown(index){
        let largest = index
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)
        if(leftChildIndex < this.heap.length && this.heap[largest] < this.heap[leftChildIndex]){
            leftChildIndex = largest
        }
        if(rightChildIndex < this.heap.length && this.heap[largest] < this.heap[rightChildIndex]){
            rightChildIndex = largest
        }
        if(largest != index){
            [this.heap[largest] , this.heap[index]] = 
            [this.heap[index] , this.heap[largest]]
            this.heapifyDown(largest)
        }
    }

    getMax(){
        return this.heap[0]
    }
}

class PriorityQueue {
    constructor() {
        this.maxHeap = new MaxHeap();
    }

    enqueue(value, priority) {
        this.maxHeap.insert({ value, priority });
    }

    dequeue() {
        if (this.maxHeap.heap.length === 0) {
            return null;
        }
        // Find the index of the maximum priority element
        const maxIndex = this.maxHeap.heap.findIndex(item => item.priority === this.maxHeap.getMax().priority);
        const maxElement = this.maxHeap.heap[maxIndex];

        // Remove the maximum element from the maxHeap
        this.maxHeap.heap[maxIndex] = this.maxHeap.heap.pop();
        this.maxHeap.heapifyDown(maxIndex);

        return maxElement.value;
    }

    peek() {
        if (this.maxHeap.heap.length === 0) {
            return null;
        }
        return this.maxHeap.getMax().value;
    }

    print() {
        console.log(this.maxHeap.heap.map(item => item.value + " (priority: " + item.priority + ")").join(", "));
    }
}

// Example usage
const pq = new PriorityQueue();
pq.enqueue("Task 1", 1);
pq.enqueue("Task 2", 5);
pq.enqueue("Task 3", 3);
pq.enqueue("Task 4", 2);
pq.enqueue("Task 5", 4);

console.log(pq.peek(), "is the highest priority task.");
console.log(pq.dequeue(), "removed.");
console.log(pq.peek(), "is the highest priority task.");
pq.print();
