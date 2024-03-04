//change script section folder name in package.json to run this ;)//
//npm install ( to install nodemon and go live )
//npm run watch

class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}
class Stack{
    constructor(value){
        let newNode = new Node(value)
        this.top = newNode
        this.length = 1
        return this
    }
    push(value){
        let newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(this.length === 0) return undefined
        let temp =this.top
        this.top = temp.next
        temp.next = null
        this.length--
        return temp
    }
}
const myStack = new Stack(13)
myStack.push(77)
myStack.push(10)
myStack.push(26)
myStack.pop()
console.log(`my stack`,myStack)
// console.log(`pop action`,myStack.pop())