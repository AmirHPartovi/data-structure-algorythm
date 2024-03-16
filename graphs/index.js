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
    removeEdge(vertex1 , vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){

            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
            .filter( vertex => vertex !== vertex2)

            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
            .filter( vertex => vertex !== vertex1)
            return true
        }
        return false
    }
}

let myGraph = new Graph()

myGraph.addVertex('a')
myGraph.addVertex('b')
myGraph.addVertex('d')
myGraph.addVertex('a')
myGraph.addEdge('a','b') 
myGraph.addEdge('d','b') 
myGraph.addEdge('c ','b') 
myGraph.removeEdge('a','c')
myGraph.removeEdge('a','b')

console.log(`my Graph`,myGraph)