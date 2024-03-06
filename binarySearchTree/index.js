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