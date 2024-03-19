//change script section folder name in package.json to run this ;)//
//npm install ( to install nodemon and go live )
//npm run watch

class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root === null)
        {
            this.root = newNode
            return this 
        }
        let temp = this.root
        while(true){
            if(newNode.value === temp.value) return undefined
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode
                    return this
                }else{
                    temp = temp.left
                }
            }else{
                if(temp.right === null){
                    temp.right = newNode
                    return this
                }else{
                    temp = temp.right
                }
            }
        }
    }
    contain(value){
        if (this.root === null) return false
        let temp = this.root
        while(temp){
            if(value < temp.value){
                temp = temp.left
            }else if(value > temp.value){
                temp = temp.right
            }else return true
        }
        return false
        
    }
    minValueNode(currentNode){
        while( currentNode.left != null){
            currentNode = currentNode.left
        }
        return currentNode
    }
    maxValueNode(currentNode){
        while( currentNode.right != null){
            currentNode = currentNode.right
        }
        return currentNode
    }
    BFS(){
        let currentNode = this.root
        let queue =[]
        let result = []

        queue.push(currentNode)
        while(queue.length){
            currentNode = queue.shift()
            result.push(currentNode.value)
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
        
        return result
    }
    DFSPreOrder(){
        let result = []
        function traverse(currentNode){
            result.push(currentNode.value)
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return result
    }
    DFSPostOrder(){
        let result = []
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
            result.push(currentNode.value)
        }
        traverse(this.root)
        return result
    }
}

let myBST = new BST()
myBST.insert(10)
myBST.insert(11)
myBST.insert(8)
myBST.insert(9)
myBST.insert(12)
console.log(myBST)
console.log(`my BST Contain 4`,myBST.contain(4))
console.log(`my BST Contain 12`,myBST.contain(12))
console.log(`my BST min value`,myBST.minValueNode(myBST.root))
console.log(`my BST max value`,myBST.maxValueNode(myBST.root))
console.log(`my BFS Tree Traverse`,myBST.BFS( ))
console.log(`my DFS PreOrder Tree Traverse`,myBST.DFSPreOrder( ))
console.log(`my DFS PostOrder Tree Traverse`,myBST.DFSPostOrder( ))