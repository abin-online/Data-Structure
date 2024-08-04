class Graph{
    constructor(){
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = new Set()
        }
    }

    addEdge(vertex1 , vertex2){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }

    print(){
        for(let char in this.adjacentList){
            console.log(vertex , " -> " , this.adjacentList[vertex]);
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
            this.adjacentList[currentVertex].forEach(neighbour=>{
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
        const visited = {}
        visited[start] = true
        const result = []
        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacentList[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    result.push(neighbour)
                }
            })
        }
        return result
    }

}