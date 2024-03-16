//change script section folder name in package.json to run this ;)//
//npm install ( to install nodemon and go live )
//npm run watch

class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    }
    addEdge(vertex1 ,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true

        }
    }
}

let myGraph = new Graph()

myGraph.addVertex('a')
myGraph.addVertex('b')
myGraph.addVertex('a')
myGraph.addEdge('a','b') 
myGraph.addEdge('c ','b') 

console.log(`my Graph`,myGraph)