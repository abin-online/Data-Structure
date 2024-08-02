class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1 , vertex2){
        if(!this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1] = new Set()
        }
        if(!this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2] = new Set()
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex}  -> ${[...this.adjacencyList[vertex]]}`);
        }
    }

    hasEdge(vertex1 , vertex2){
        return this.adjacencyList[vertex1].has(vertex2)
    }

    removeEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        else{
            for(let adjecentVertex of this.adjacencyList[vertex]){
                this.removeEdge(adjecentVertex , vertex)
            }
        }
    }

    breadthFirstSearch(start){
        const queue = [start]
        const visited = {}
        visited[start] = true
        const result = []
        let currentVertex
        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencyList[vertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    result.push(neighbour)
                }
            })
        }
        return result
    }

    depthFirstSearch(start){
        const stack = [start]
        const  visited = {}
        visited[start] = true
        const result = []
        let currentVertex
        while(queue.length){
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    result.push(neighbour)
                }
            })
        }
        return result
    }

}