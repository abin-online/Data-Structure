class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1 , vertex2) {
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    display() {
        for(let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`)
        }
    }

    hasEdge(vertex1 , vertex2) {
        if(this.adjacencyList[vertex1].has(vertex2)){
            return true
        }
        return false
    }

    removeEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].delete(vertex2)
        }
        if(this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].delete(vertex1)
        }
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            return
        }else{
            for(let adjVertex in this.adjacencyList[vertex]){
                this.removeEdge(adjVertex , vertex)
            }
            delete this.adjacencyList[vertex]
        }
    }

    breadthFirstSearch(start) {
        const queue = [start]
        const result = []
        const visited = {}
        visited[start] = true
        let currVertex 
        while(queue.length) {
            currVertex = queue.shift()
            result.push(currVertex)
            this.adjacencyList[currVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true
                    result.push(neighbour)
                }
            });
        }
        return result
    }

    depthFirstSearch(start) {
        const stack = [start]
        const result = []
        const visited = {}
        visited[start] = true
        let currVertex
        while(stack.length) {
            currVertex = stack.pop()
            result.push(currVertex)
            this.adjacencyList[currVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour)
                }
            })
        }
        return result
    }
    
}