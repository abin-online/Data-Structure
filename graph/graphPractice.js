class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }

    hasEdge(vertex1 , vertex2){
        return this.adjacencyList(vertex1).has(vertex2)
    }

    removeEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }else{
            for(let adjVertex of this.adjacencyList[vertex]){
                this.removeEdge(vertex , adjVertex)
            }
        }
    }



  
    

    breadthFirstSearch(start){
        const queue = [start]
        const result = []
        const visited = {}
        visited[start] = true
        let currentVertex
        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)
            
            this.adjacencyList[currentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }

    depthFirstSearchIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
    
        visited[start] = true;
    
        while (stack.length) {
          currentVertex = stack.pop();
          result.push(currentVertex);
    
          this.adjacencyList[currentVertex].forEach(neighbor => {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              stack.push(neighbor);
            }
          });
        }
    
        return result;
      }

    depthFirstSearch(start){
        const stack = [start]
        const visited = {}
        const result = []
        visited[start] = true
        let currentVertex 

        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.display()


console.log(graph.breadthFirstSearch("B"));
console.log(graph.depthFirstSearch("B"));
