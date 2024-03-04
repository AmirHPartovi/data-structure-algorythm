//change script section folder name in package.json to run this ;)//
//npm install ( to install nodemon and go live )
//npm run watch

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(value){
        let newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }
    enqueue(value){
        let newNode = new Node(value)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
    dequeue(){
        if(this.length===0) return undefined
        let temp = this.first
        if(this.length===1){
            this.first = null
            this.last = null
        }else{
            this.first = this.first.next
        }
        temp.next = null
        this.length--
        return temp
    }
}

let myQueue =new Queue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.dequeue()

console.log(`my Queue`,myQueue)
console.log(`dequeue returns =>` , myQueue.dequeue())